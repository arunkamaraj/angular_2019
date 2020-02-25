import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <p>
      card works!
    </p>
    <ng-content></ng-content>
  `,
  styles: []
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
