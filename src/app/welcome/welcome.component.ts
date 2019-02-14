import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
    message : string = "Message Initialization";
    userName = '';

  ngOnInit() {
    this.message = "Hi Shalini";
    this.userName = this.route.snapshot.params['name'];
  }
  constructor(private route:ActivatedRoute) {
    this.message = "Hi Varun";
  }

}
