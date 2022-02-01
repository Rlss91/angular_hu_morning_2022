import { Component, OnInit } from '@angular/core';

export interface UserInfo {
  id: number;
  name: string;
}

@Component({
  selector: 'app-t1father',
  templateUrl: './t1father.component.html',
  styleUrls: ['./t1father.component.css'],
})
export class T1fatherComponent implements OnInit {
  usersArr: UserInfo[];

  constructor() {
    this.usersArr = [
      {
        id: 0,
        name: 'kenny',
      },
      {
        id: 1,
        name: 'bob',
      },
      {
        id: 2,
        name: 'moshe',
      },
      {
        id: 3,
        name: 'ori',
      },
      {
        id: 4,
        name: 'kirill',
      },
      {
        id: 5,
        name: 'elazar',
      },
      {
        id: 6,
        name: 'eli',
      },
      {
        id: 7,
        name: 'almog',
      },
    ];
  }

  ngOnInit(): void {}

  handleItemClicked(id: number): void {
    this.usersArr = this.usersArr.filter((item) => item.id != id);
  }
}
