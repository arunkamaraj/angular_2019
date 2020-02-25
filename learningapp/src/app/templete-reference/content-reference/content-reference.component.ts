import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-content-reference',
  templateUrl: './content-reference.component.html',
  styleUrls: ['./content-reference.component.css']
})
export class ContentReferenceComponent implements OnInit, AfterContentInit {

  @ContentChild('title', {static: false})
  title: any;

  constructor() { }

  ngOnInit() {
  }
  
  ngAfterContentInit(){
    console.log(this.title.nativeElement.innerHTML);
  }

}
