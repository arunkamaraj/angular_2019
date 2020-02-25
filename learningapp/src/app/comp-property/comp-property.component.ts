import { Component, OnInit, QueryList, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';

import { MyClass } from './comp-property-models';
import { QueryContentComponent } from './query-content/query-content.component';
import { QueryComponent } from './query/query.component';
import { SingletonsProviderComponent } from './singletons-provider/singletons-provider.component';

@Component({
  selector: 'app-comp-property',
  templateUrl: './comp-property.component.html',
  styleUrls: ['./comp-property.component.css'],
  interpolation: ['{:!', '!:}'],
  // injected in parent so no need to inject again in child app-singletons-provider
  providers: [{provide: MyClass, useClass: MyClass}]
  // viewProviders: [MyClass] => this providers only injetced to view children not for content child
})
export class CompPropertyComponent implements OnInit, AfterViewInit {

  age = 30;

  sampleArray = [1, 2];

  /**
   *  here static is false then it act as deafault
   */
  @ViewChild(SingletonsProviderComponent, {static: false})
  singletonProvider: SingletonsProviderComponent;

  @ViewChild(QueryContentComponent, {static: true})
    queryContent: QueryContentComponent;

  @ViewChildren(QueryComponent)
  childrenOfSingletonProvider: QueryList<QueryComponent>;
  constructor(public myClass: MyClass) {
    console.log('Providers Demo----------', myClass.time);
  }

// tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(): void {
    console.log('######### in ngAfterViewInit for child', this.singletonProvider);
    console.log('&&&&&&&&& in ngAfterViewInit for grand child', this.queryContent);
    // sampleArray = [1, 2]; plus anotherquery component
    console.log('$$$$$$$$$ in ngAfterViewInit children', this.childrenOfSingletonProvider);
  }


  ngOnInit() {
    console.log('@@@@@@@@@ in ngOnInit for child', this.singletonProvider);
    console.log('!!!!!!!!! in ngAfterViewInit for grand child', this.queryContent);
    console.log('********* in ngOnInit children', this.childrenOfSingletonProvider);
  }

}

