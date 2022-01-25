import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-directive',
  templateUrl: './style-directive.component.html',
  styleUrls: ['./style-directive.component.css'],
})
export class StyleDirectiveComponent implements OnInit {
  kenBoolean: boolean;
  constructor() {
    this.kenBoolean = true;
  }

  ngOnInit(): void {}

  handleBtnClick(): void {
    this.kenBoolean = !this.kenBoolean;
  }
}
