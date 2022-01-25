import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-directive',
  templateUrl: './class-directive.component.html',
  styleUrls: ['./class-directive.component.css'],
})
export class ClassDirectiveComponent implements OnInit {
  primaryOrDanger: boolean;

  constructor() {
    this.primaryOrDanger = true;
  }

  ngOnInit(): void {}

  handleBtnClick(): void {
    this.primaryOrDanger = !this.primaryOrDanger;
    // if (this.primaryOrDanger == true) this.primaryOrDanger = false;
    // else this.primaryOrDanger = true;
  }
}
