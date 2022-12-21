import { Get, Controller, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getUsers() {
    return this.appService.getUsers();
  }

  @Get('/create')
  create() {
    return this.appService.createUser();
  }
}
