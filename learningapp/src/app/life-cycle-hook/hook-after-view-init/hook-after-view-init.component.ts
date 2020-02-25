import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hook-after-view-init',
  template: `
    <p>
      hook-after-view-init works!
    </p>
    Input field <input #input/>
  `,
  styles: []
})
export class HookAfterViewInitComponent implements AfterViewInit {

  constructor() { }

  @ViewChild('input', {static: false})
  inputfield: any;

  ngAfterViewInit(){
    this.inputfield.nativeElement.focus();
  }
}
