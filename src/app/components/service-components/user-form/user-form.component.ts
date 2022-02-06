import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import User from 'src/app/model/User.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  id: number;
  name: string;
  email: string;
  constructor(private dataService: DataServiceService) {
    this.id = NaN;
    this.name = '';
    this.email = '';
  }

  ngOnInit(): void {}

  handleSubmitClick(): void {
    let user: User = {
      id: this.id,
      name: this.name,
      email: this.email,
      description: 'asdfkojuhweroiuh23q490875yrfuinegopiuw4jht098w4qjet',
    };
    this.dataService.addUserToUsersArr(user);
  }
}
