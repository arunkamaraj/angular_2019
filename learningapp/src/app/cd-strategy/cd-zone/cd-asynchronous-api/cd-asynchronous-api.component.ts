import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cd-asynchronous-api',
  templateUrl: './cd-asynchronous-api.component.html',
  styleUrls: ['./cd-asynchronous-api.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdAsynchronousApiComponent {
  public count = 0 ;

  constructor() {
    setTimeout(() => this.count = 5, 10000);
    // setInterval(() => this.count = 5, 100);
    // Promise.resolve().then(() => this.count = 5);
  }

  public add() {
    this.count++;
  }

  get runChangeDetectionInAPI() {
    console.log('Checking the view with API');
    return true;
  }
}
