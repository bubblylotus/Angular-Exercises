import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];


  constructor(private usersService: UsersServiceService) { }

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
  }
  onSetToInactive(id: number){
    this.usersService.setToInactive(id);
  }
}

