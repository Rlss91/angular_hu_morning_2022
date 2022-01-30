import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

export enum BtnColors {
  primary = 'btn btn-primary',
  danger = 'btn btn-danger',
}

@Component({
  selector: 'app-mybutton',
  templateUrl: './mybutton.component.html',
  styleUrls: ['./mybutton.component.css'],
})
export class MybuttonComponent implements OnInit {
  @Input() classes: string = '';
  @Output() onBtnClick: EventEmitter<any>;

  constructor() {
    // this.classes = 'btn btn-secondary';
    this.classes = BtnColors.primary;
    this.onBtnClick = new EventEmitter<any>();
  }

  ngOnInit(): void {}

  handleBtnClick(): void {
    console.log('clicked');
    //simulate click
    //מדמה לחיצה בעכבר
    this.onBtnClick.emit();
  }
}
