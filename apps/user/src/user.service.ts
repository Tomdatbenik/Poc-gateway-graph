import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findById(id: String): string {
    return 'Hello World!';
  }
}
