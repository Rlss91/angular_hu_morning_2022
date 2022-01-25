import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-directive',
  templateUrl: './ngif-directive.component.html',
  styleUrls: ['./ngif-directive.component.css'],
})
export class NgifDirectiveComponent implements OnInit {
  emailTouched: boolean;
  constructor() {
    this.emailTouched = false;
  }

  ngOnInit(): void {}

  handleEmailClick(): void {
    this.emailTouched = true;
  }
}
