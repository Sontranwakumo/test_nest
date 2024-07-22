import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const obj = {
      hello:"hello",
      value: 1
    }
    const res:string = JSON.stringify(obj);
    return res;
  }
}
