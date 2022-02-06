import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  logged: boolean;
  logChangeSub: Subscription | null;

  constructor(private authService: AuthService) {
    this.logged = false;
    this.logChangeSub = null;
  }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    this.logChangeSub?.unsubscribe();
  }

  ngOnInit(): void {
    // this.logChangeSub = this.authService.logChange.subscribe(
    //   (logged: boolean) => {
    //     this.logged = logged;
    //   })
    //! deprecated
    // this.logChangeSub = this.authService.logChange.subscribe(
    //   (logged: boolean) => {
    //     this.logged = logged;
    //   },
    //   (err) => {},
    //   () => {
    //     console.log('logChangeSub completed');
    //   }
    // );
    //* the new way
    this.logChangeSub = this.authService.logChange.subscribe({
      next: (logged: boolean) => {
        this.logged = logged;
      },
      error: (err) => {
        console.log('err', err);
      },
      complete: () => {
        console.log('logChangeSub completed');
      },
    });
  }

  handleLogin(): void {
    this.authService.logIn();
  }
  handleLogout(): void {
    this.authService.logOut();
  }
}
