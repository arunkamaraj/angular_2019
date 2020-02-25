import { Component, OnInit } from '@angular/core';
import { SizerDirective } from './sizer.directive';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
 public title: string = 'CustomComponent';
  constructor() { }

  ngOnInit() {
  }

}
