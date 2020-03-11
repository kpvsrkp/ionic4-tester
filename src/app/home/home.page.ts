import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router : Router,

  ) {}

  details(){
    let navigationExtras: NavigationExtras = {
      state: {
        id: "1234"
      }
    };

    this.router.navigate(['details'], navigationExtras);
  }

}
