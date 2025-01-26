import { Component, OnInit } from '@angular/core';
import { User } from '../../../../domain/entities/User';
import { GetUsersService } from '../../../../application/services/get-user.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector:'app-list-user',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-list.component.html',
  styles: ``
})
export default class UserListComponent implements OnInit {
  users: User[] = [];
  constructor(private getUsersService: GetUsersService) {

  console.log(".----------------------------");

  }

  ngOnInit(): void {
    this.getUsersService.execute().subscribe((data) => {
      this.users = data;
    });

    console.log(".----------------------------");
    console.log(this.users);
  }
}