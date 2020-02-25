import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-cd-onpush',
  templateUrl: './cd-onpush.component.html',
  styleUrls: ['./cd-onpush.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdOnpushComponent {

  @Input()
  config: any;

  get runChangeDetection() {
    console.log('Checking the view for on push strategy');
    return true;
  }

}
