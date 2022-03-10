import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { MappingRegistryService } from '../common/mapping-registry.service';
import { MockHelper } from '../common/mock.helper';
import { GenericFactory } from '../common/generic.factory';
import { LocationMappingService } from './location-mapping.service';
import { Location } from './location.entity';



describe('LocationController', () => {
  let locationController : LocationController;
  let mockLocationService : LocationService;
  let mappingRegistryService : MappingRegistryService;

  beforeEach(async () => {
    mockLocationService = MockHelper.mock<LocationService>({
      list: {
        resolves: [
          GenericFactory.create<Location>(Location, {
            id: '1',
            name: 'Location 1',
          }),
        ],
      },
    });
    mappingRegistryService = new MappingRegistryService();
    const locationMappingService = new LocationMappingService(mappingRegistryService);
    locationController = new LocationController(mockLocationService, mappingRegistryService);
  });

  describe('root', () => {
    it('should return an array with Locations', () => {
      expect(locationController.listLocations()).resolves.toMatchObject({
        locations: [
          {
            id: '1',
            name: 'Location 1',
          },
        ],
      });
    });
  });
});