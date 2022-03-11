import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { LocaionMappingServices } from './location-mapping.service';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';


@Module({
    controllers: [
        LocationController,
    ],
    imports: [TypeOrmModule.forFeature([Location]), CommonModule],
    providers: [LocationService, LocaionMappingServices],
})
export class LocationModule {}
