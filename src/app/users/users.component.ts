import { Component, OnInit } from '@angular/core';
import {UsersService} from "../service/users.service";
import {UserModule} from "../shared/user/user.module";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public usersService: UsersService) {}

  ngOnInit(): void {
  }

}
