import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = 'varun'
  password = 'reddy'
  errorMessage = "Invalid Credentials!"
  invalidCreds = false
  constructor(private router:Router) { }

  ngOnInit() {
    
  }

  handleLogin(){
    // console.log(this.userName)
    this.invalidCreds = (this.userName === 'varun' && this.password === 'reddy') ? false : true;
    if (!this.invalidCreds){
      this.router.navigate(['welcome', this.userName]);
    }
  }
}
