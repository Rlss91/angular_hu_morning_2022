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

  ngOnInit(): void {
    //addEventListener or on (nodejs)
    this.dataService.onUsersArrChanged.subscribe((usersArr) => {
      this.usersArr = usersArr;
    });
  }

  handleDelete(id: number): void {
    console.log('id', id);
    //! this will not delete data from service
    // this.usersArr = this.usersArr.filter((item) => item.id != id);
    //* the good way//
    this.dataService.removeItemFromUsersArr(id);
    // this.usersArr = this.dataService.usersArr;
    console.log('service user arr', this.dataService.usersArr);
  }

  // handleDelete(user1: User1):void{
  //   console.log("user1", user1)
  // }
}
