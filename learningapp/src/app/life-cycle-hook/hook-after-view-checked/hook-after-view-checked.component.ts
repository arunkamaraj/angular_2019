import { Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hook-after-view-checked',
  template: `
    <p>
      hook-after-view-checked works!
    </p>
    input field <input [(ngModel)]="inputData"/>
    {{inputData}}
    <div #message></div>
  `,
  styles: []
})
export class HookAfterViewCheckedComponent implements AfterViewChecked {

  inputData = '';
  constructor() { }

  @ViewChild('message', {static: false})
  message: any;

  ngAfterViewChecked(){
      console.log('AfterViewChecked');
      // tslint:disable-next-line: radix
      if (isNaN(parseInt(this.inputData))) {
            this.message.nativeElement.innerHTML = 'Input not numeric.';
      } else {
        console.log(isNaN(parseInt(this.inputData)), parseInt(this.inputData)); // error in this logic
        this.message.nativeElement.innerHTML = 'Input is numeric.';
      }
  }
}

