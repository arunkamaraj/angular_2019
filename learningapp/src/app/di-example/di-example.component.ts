import { Component, OnInit } from '@angular/core';
import { Earth, Moon } from './di-example.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-di-example',
  template: `
    <p>
      di-example works!
      {{earthData}}
      {{moonData}}
    </p>
  `,
  styles: [],
  providers: [{provide : Earth, useClass: Earth},
              {provide: Moon, useClass: Moon },
              // {provide: Earth, useClass: Moon},
          ]

})
export class DIExampleComponent implements OnInit {
  public earthData: string;
  public moonData: string;

  constructor(
    e: Earth,
    m: Moon,
    ) {
      this.earthData = e.sayHello();
      this.moonData = m.sayHello();
      console.log(e, this.earthData);
      }

  ngOnInit() {
  }

}
