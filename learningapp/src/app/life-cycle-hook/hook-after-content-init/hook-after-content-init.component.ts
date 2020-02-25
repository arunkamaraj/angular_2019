import { Component, OnInit, AfterContentInit, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-hook-after-content-init',
  templateUrl: './hook-after-content-init.component.html',
  styleUrls: ['./hook-after-content-init.component.css']
})
export class HookAfterContentInitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
