import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {TestException} from "./api.exception";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  getHello2(): string {
    throw new TestException();
  }
}
