import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {TestException} from "./api.exception";
import {ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('Route')
@ApiResponse({status: 456, description: 'No access'})
@ApiResponse({status: 456, description: 'No access'})
@Controller('person')
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  getHello2(): string {
    throw new TestException();
  }

  @Get()
  getHi(): string {
    return 'Hello nigga';
  }

}
