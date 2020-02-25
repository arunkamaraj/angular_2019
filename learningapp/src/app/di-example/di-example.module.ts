import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIExampleComponent } from './di-example.component';
import { Earth, Moon } from './di-example.service';

@NgModule({
  declarations: [DIExampleComponent],
  imports: [
    CommonModule
  ],
  providers: [
    Moon,
    Earth
  ],

})
export class DiExampleModule { }
