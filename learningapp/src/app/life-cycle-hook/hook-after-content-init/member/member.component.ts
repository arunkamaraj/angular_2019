import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  template:  `
  <p [style.backgroundColor]="getBackgroundColor()">
    <ng-content></ng-content>
  </p>
  `,
  styles: ['p{padding: 5px}']
})
export class MemberComponent {

  selected = false;
  getBackgroundColor() {
  return this.selected ? '#FFCCCC' : '#CCFFFF';
  }
}
