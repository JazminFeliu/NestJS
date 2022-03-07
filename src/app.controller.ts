import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

interface ILocationsListDto {
  locations: string[];
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('list.hbs')
  listLocations(): ILocationsListDto {
    return {
      locations: [
        "Location 1",
        "Location 2",
        "Location 3",
      ],
    };
  }
}
