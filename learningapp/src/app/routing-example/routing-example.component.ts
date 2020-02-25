import { Component, OnInit } from '@angular/core';
import { Router, RouterState } from '@angular/router';

@Component({
  selector: 'app-routing-example',
  template: `
    <div>
      <h3>routing-example works! </h3>
      <p>Navigated data : {{ navigatedData }} </p>
      <p><br/>RouterState : {{ state }} </p>
    </div>

    <h1>
      Pizzas
    </h1>

    <a [routerLink]="['app-peporoni']">Pepperoni</a>&nbsp;
    <a [routerLink]="['app-everything','small']">Everything Small</a>&nbsp;
    <a [routerLink]="['app-everything','large']">Everything Large</a>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class RoutingExampleComponent implements OnInit {

  public navigatedData: boolean;
  public state: RouterState;

  constructor(router: Router) {
    this.navigatedData = router.navigated;
    this.state = router.routerState;
    console.log(this.state);
    // const initialNavigation = router.initialNavigation();
    // const setUpLocationChangeListener = router.setUpLocationChangeListener();
    const getCurrentNavigation = router.getCurrentNavigation();
    const isActive = router.isActive(router.url, true);
    // console.log(getCurrentNavigation);


  }

  ngOnInit() {
  }

}
