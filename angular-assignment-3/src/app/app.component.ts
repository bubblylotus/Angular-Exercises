import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    .hide{
      display: none;
     }
     .from5{
       color: white;
     }
  `]
})
export class AppComponent {
  title = 'angular-assignment-3';
  display: Boolean = true;
  toggles: string []= [];
  count: number = 0;
  toggleParagraph(){
    this.display = !this.display;
    this.count ++;
    this.toggles.push('toggle' + this.count);
  }
}
