import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class UserService {

  findById(id: String): any {
    return id == "1" ? {id: 1, name: "Tom"} : {id: 2, name: "mario"};
  }
}
