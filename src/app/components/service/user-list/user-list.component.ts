import { Component, OnInit } from '@angular/core';
import User from 'src/app/model/User.model';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  usersArr: User[];

  constructor(private dataService: DataServiceService) {
    this.usersArr = this.dataService.usersArr;
  }

  ngOnInit(): void {}
}
