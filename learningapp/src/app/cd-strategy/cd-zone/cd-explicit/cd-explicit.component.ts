import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cd-explicit',
  templateUrl: './cd-explicit.component.html',
  styleUrls: ['./cd-explicit.component.css']
})
export class CdExplicitComponent {

  count = 0;

  constructor(private cdr: ChangeDetectorRef) {

    setTimeout(() => {
      this.count = 5;
      this.cdr.detectChanges();
    }, 1);
    // this.count = 5;
    // this.count = 10;

  }

}
