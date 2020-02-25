import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cd-zone',
  templateUrl: './cd-zone.component.html',
  styleUrls: ['./cd-zone.component.css']
})
export class CdZoneComponent implements OnInit {

  public defaultCDData = 'this is deafult CD';
  // public onPushCDData = 'this is on push CD';

  public config = {
    position: 'top'
  };
  constructor() { }

  ngOnInit() {
  }
  onClick() {}


  onClickfForOnPush() {
    this.config.position = 'bottom';
  }

  onClickfForOnPushWithRefChange() {
    this.config = {position : 'bottom'};
  }
}
