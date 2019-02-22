import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationServiceService } from '../service/hardcoded-authentication-service.service';

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
  constructor(private router:Router, private hardcodedAuthenticationService : HardcodedAuthenticationServiceService) { }

  ngOnInit() {
    
  }

  handleLogin(){
    // console.log(this.userName)
    if (this.hardcodedAuthenticationService.authenticate(this.userName, this.password)){
      this.router.navigate(['welcome', this.userName]);
      this.invalidCreds = false
    }
    else{
      this.invalidCreds = true
    }
  }
}
