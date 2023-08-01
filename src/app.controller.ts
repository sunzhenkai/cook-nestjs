import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  getUsers(): Response {
    return this.appService.getUserList();
  }
}
