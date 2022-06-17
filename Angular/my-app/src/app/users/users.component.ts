import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getUsers().subscribe(data =>{
      this.users = data;
    });
  }

}
