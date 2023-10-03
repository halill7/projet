import {Controller, Delete, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {TestException} from "@common/api/api.testexception";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {AppControllerHelloWorld} from "./app.swagger";

@ApiTags('Route')
@ApiResponse({status: 456, description: 'No access'})
@ApiResponse({status: 456, description: 'No access'})
@Controller('person')
export class AppController {
  constructor(private readonly appService: AppService) {}


  @ApiOperation(AppControllerHelloWorld)
  @Get()
  getHello2(): string {
    throw new TestException();
  }

  @Post()
  getHello(): string {
    throw new TestException();
  }

  @Delete()
  getHello3(): string {
    throw new TestException();
  }


}
