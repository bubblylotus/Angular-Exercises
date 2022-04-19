import { Component } from '@angular/core';
import { UsersServiceService } from './users-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  providers: [UsersServiceService]
})
export class AppComponent {
  title = 'services-assignment';
  constructor(private usersService: UsersServiceService){}
}
