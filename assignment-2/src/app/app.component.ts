import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  title = 'assignment-2';

  isEmpty(){
    if(this.username.length === 0){
      return true;
    }
    else{
      return false;
    }
  }
  onReset(){
    this.username = '';
  }
}
