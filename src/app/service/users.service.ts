import { Injectable } from '@angular/core';
import {UserModule} from "../shared/user/user.module";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: UserModule[] = [];
  constructor() {
    this.addUser("Oussama");
    this.addUser("Yassine", false);
    this.addUser("Brahim");
    this.addUser("ZaaK");
  }

  addUser(name: string, active: boolean = true) {
    this.users.push(new UserModule(name, active));
  }

  removeUser(id: number) {
    this.users.splice(id, 1);
  }

  getActiveUsers() {
    return this.users.filter(user => user.active);
  }
  getInactiveUsers() {
    return this.users.filter(user => !user.active);
  }
}
