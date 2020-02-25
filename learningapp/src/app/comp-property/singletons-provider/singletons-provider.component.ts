import { Component, OnInit } from '@angular/core';
import { MyClass } from '../comp-property-models';

@Component({
  selector: 'app-singletons-provider',
  templateUrl: './singletons-provider.component.html',
  styleUrls: ['./singletons-provider.component.css']
})
export class SingletonsProviderComponent implements OnInit {

  dataToVerifyInViewChild: string = 'Verify';

  constructor( public myClass: MyClass) { }

  public testMethod(): void{
    console.log("method from SingletonsProviderComponent ");
  }

  ngOnInit() {
  }

}
