import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Id } from 'shared';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/id')
  getId(): string {
    return Id.novoHash();
  }
}
