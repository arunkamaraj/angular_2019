import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable-example',
  template: `
    <p>
      observable-example works!
    </p>
    <ul>
      <li>
        <h2><a routerLink ="app-debounce-example" routerLinkActive="active">Debounce</a></h2>
      </li>

    </ul>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ObservableExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
