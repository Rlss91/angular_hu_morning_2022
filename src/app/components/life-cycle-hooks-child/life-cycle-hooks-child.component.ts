import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks-child',
  templateUrl: './life-cycle-hooks-child.component.html',
  styleUrls: ['./life-cycle-hooks-child.component.css'],
})
export class LifeCycleHooksChildComponent
  implements OnInit, OnDestroy, DoCheck, OnChanges
{
  @Input() toggle: boolean;
  intervalID: any;
  constructor() {
    console.log('constructor()');
    this.toggle = false;
    this.intervalID = NaN;
  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log('ngOnChanges(changes: SimpleChanges)');
    console.log('changes', changes);
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck()');
  }

  ngOnInit(): void {
    console.log('ngOnInit()');
    this.intervalID = setInterval(() => {
      console.log('interval');
    }, 1000);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy()');
    clearInterval(this.intervalID);
  }
}
