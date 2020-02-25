import { Component, OnInit } from '@angular/core';
import { MyClass } from '../comp-property-models';

@Component({
  selector: 'app-non-singleton',
  templateUrl: './non-singleton.component.html',
  styleUrls: ['./non-singleton.component.css'],
  providers: [MyClass]
})
export class NonSingletonComponent implements OnInit {

  constructor( public myClass: MyClass) { }

  ngOnInit() {
  }

}
