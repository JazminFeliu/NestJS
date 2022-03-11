import { Injectable } from "@nestjs/common";
import { MappingService } from "src/common/mapping.service";
import { LocationDto } from "./location.dto";
import { Location } from "./location.entity";


@Injectable()
export class LocaionMappingServices extends MappingService {
    public addMapping(): void {
        automapper.createMap(Location.name, LocationDto.name);
    }
}