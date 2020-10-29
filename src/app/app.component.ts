import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Thank you for Visiting!!!';
  message = 'Welcome to Quickgroceries';

  getMessage(){
    console.log("get welcome message");
  }
}
