import { Injectable } from '@angular/core';
import User from '../model/User.model';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  usersArr: User[];
  constructor() {
    this.usersArr = [
      {
        id: 0,
        name: 'kenny',
        email: 'kenny@gmail.com',
        description: 'sdkjfhnsdf9 8weqh0r9 3w2hr09wu ehfa097h r0u rfna',
      },
      {
        id: 1,
        name: 'bob',
        email: 'bob@gmail.com',
        description: 'sdkjfhnsdf9 8weqh0r9 3w2hr09wu ehfa097h r0u rfna',
      },
      {
        id: 2,
        name: 'shlomo',
        email: 'shlomo@gmail.com',
        description: 'sdkjfhnsdf9 8weqh0r9 3w2hr09wu ehfa097h r0u rfna',
      },
      {
        id: 3,
        name: 'shimshon',
        email: 'shimshon@gmail.com',
        description: 'sdkjfhnsdf9 8weqh0r9 3w2hr09wu ehfa097h r0u rfna',
      },
      {
        id: 4,
        name: 'jim',
        email: 'jim@gmail.com',
        description: 'sdkjfhnsdf9 8weqh0r9 3w2hr09wu ehfa097h r0u rfna',
      },
      {
        id: 5,
        name: 'patrik',
        email: 'patrik@gmail.com',
        description: 'sdkjfhnsdf9 8weqh0r9 3w2hr09wu ehfa097h r0u rfna',
      },
    ];
  }
}
