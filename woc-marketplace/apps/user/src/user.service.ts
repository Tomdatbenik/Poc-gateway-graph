import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private userData: User[] = [
    new User(1, 'Mario'),
    new User(2, 'Tom'),
    new User(3, 'Lars'),
    new User(4, 'Emil'),
  ];

  findById(id: number): User {
    return this.userData.find((x) => x.id == id);
  }
}
