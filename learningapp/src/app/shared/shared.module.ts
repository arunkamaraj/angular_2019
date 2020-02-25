import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CustomButtonComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CustomButtonComponent]

})
export class SharedModule { }
