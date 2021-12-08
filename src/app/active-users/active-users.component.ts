import { Component, OnInit } from '@angular/core';
import {UsersService} from "../service/users.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  constructor(public usersService: UsersService) {}

  ngOnInit(): void {
  }

}
