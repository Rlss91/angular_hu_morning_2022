import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserInfo } from '../t1father/t1father.component';

@Component({
  selector: 'app-t1child',
  templateUrl: './t1child.component.html',
  styleUrls: ['./t1child.component.css'],
})
export class T1childComponent implements OnInit {
  @Input() user: UserInfo;
  @Output() onItemClick: EventEmitter<number>;
  constructor() {
    this.user = {
      id: NaN,
      name: '',
    };
    this.onItemClick = new EventEmitter<number>();
  }

  ngOnInit(): void {}

  handleItemClick(): void {
    this.onItemClick.emit(this.user.id);
  }
}

// class A{}

// let a = new A()
