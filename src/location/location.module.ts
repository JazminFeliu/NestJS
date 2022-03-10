import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';


@Module({
    controllers: [
        LocationController,
    ],
    imports: [TypeOrmModule.forFeature([Location])],
    providers: [LocationService],
})
export class LocationModule {}
