import { Injectable } from '@angular/core';
import {UserModule} from "../shared/user/user.module";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: UserModule[] = [];
  constructor() {
    this.addUser("Oussama");
    this.addUser("Yassine");
    this.addUser("Brahim");
  }

  addUser(name: string) {
    this.users.push(new UserModule(name, true));
  }

  removeUser(id: number) {
    this.users.splice(id, 1);
  }
}
