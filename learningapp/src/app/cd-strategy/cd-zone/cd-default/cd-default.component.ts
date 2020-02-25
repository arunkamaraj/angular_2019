import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cd-default',
  templateUrl: './cd-default.component.html',
  styleUrls: ['./cd-default.component.css']
})
export class CdDefaultComponent {

  @Input()
  name: string;

  get runChangeDetection() {
    console.log('Checking the view from default');
    return true;
  }

}
