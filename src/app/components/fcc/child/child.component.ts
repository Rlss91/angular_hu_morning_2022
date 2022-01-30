import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import User from 'src/app/model/User.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() user: User;
  @Output() onDelete: EventEmitter<number>;
  constructor() {
    this.user = { id: NaN, name: '', email: '', description: '' };
    this.onDelete = new EventEmitter<number>();
  }

  ngOnInit(): void {}

  handleDeleteBtnClick(): void {
    this.onDelete.emit(this.user.id);
  }
}
