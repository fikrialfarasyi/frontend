import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showLogin = false;
  user: User = new User();
  public myData = new User();
  msg = "";
  constructor(
    private userService : UserService,
    private router : Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.userService.loginuser(this.user).subscribe(
      data => {
        
        console.log("Response Receiver");
        this.userService.saveIdLogin(data.id);
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.log("Response Ocured");
        this.msg= "Bad Credentials, Please enter valid email and Password";
      }
    );
  }

}
