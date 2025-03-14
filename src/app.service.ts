import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const text: string = `В данный момент сервис недоступен, 
    можете поиграться со swagger.`;
    return text;
  }
}
