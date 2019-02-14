import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
    message : string = "Message Initialization";
  

  ngOnInit() {
    this.message = "Hi Shalini";
  }
  constructor() {
    this.message = "Hi Varun";
  }

}
