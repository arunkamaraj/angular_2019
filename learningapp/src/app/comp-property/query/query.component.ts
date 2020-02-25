import { AfterContentInit, Component, OnInit, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { QueryContentComponent } from '../query-content/query-content.component';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit, AfterContentInit {

  @ContentChild(QueryContentComponent, {static: false})
  queryContentData: QueryContentComponent;

  @ContentChildren(QueryContentComponent)
  queryContentchildres: QueryList<QueryContentComponent> = new QueryList<QueryContentComponent>();
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void{
    console.log('()()()()() in ngAfterContentInit', this.queryContentData);
  }
}
