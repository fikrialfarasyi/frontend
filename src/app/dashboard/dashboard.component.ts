import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  idLogin! :Number;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.currentId.subscribe(data => this.idLogin = data);
    console.log(this.idLogin);
  }

}
