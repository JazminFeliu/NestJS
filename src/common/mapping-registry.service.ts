import 'automapper-ts';
import { Injectable } from '@nestjs/common';
import { MappingService } from './mapping.service';
import { isMapIterator } from 'util/types';
import { create } from 'domain';

@Injectable()
export class MappingRegistryService {
    private readonly mappingServices: MappingService[] = [];

    public registerMappingService(mappingService: MappingService){
        this.mappingServices.push(mappingService);
        mappingService.addMapping();
    }

    public map<T>(source: string, target: string, object: any):T {
        return automapper.map(source, target, Object) as T;
    }
}