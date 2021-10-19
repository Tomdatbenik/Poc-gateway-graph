import { Injectable, Logger } from '@nestjs/common';
import { User } from 'apps/posts/src/user.entity';

@Injectable()
export class UserService {
  private userData: User[] = [
    new User(1, 'anus post'),
    new User(2, 'kanker post'),
    new User(3, 'poopie post'),
  ];

  findById(id: number): User {
    return this.userData.find((x) => x.id == id);
  }
}
