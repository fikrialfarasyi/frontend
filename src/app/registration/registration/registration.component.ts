import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = new User();

  constructor(private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.userService.saveUser(this.user).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/login']);
      }
    );
  }

}
