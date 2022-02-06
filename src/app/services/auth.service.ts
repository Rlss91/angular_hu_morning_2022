import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean;
  logChange: Subject<boolean>;
  constructor() {
    this.isLoggedIn = false;
    this.logChange = new Subject<boolean>();
    setTimeout(() => {
      // new Date().getMilliseconds()
      // this.logChange.complete();
      this.logChange.error({ msg: 'the subject resting now in peace' });
    }, 3000);
  }

  logIn(): void {
    this.isLoggedIn = true;
    this.logChange.next(this.isLoggedIn);
    //this.logChange.emit(this.isLoggedIn);
    /*
      next for subject
      emit for event emitter
    */
  }

  logOut(): void {
    this.isLoggedIn = false;
    this.logChange.next(this.isLoggedIn);
    //this.logChange.emit(this.isLoggedIn);
  }
}
