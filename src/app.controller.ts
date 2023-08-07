import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Response, ResponseWrapper, Box } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  getUsers(): Response {
    return this.appService.getUserList();
  }

  @Get('box')
  getBox(): ResponseWrapper<Box<any>> {
    return this.appService.getBox();
  }

  // 统一规范, 返回 ResponseWrapper
  @Get('v2/users')
  getUsersV2(): ResponseWrapper<Response> {
    return { code: 200, data: this.appService.getUserList() } as ResponseWrapper<Response>;
  }
}
