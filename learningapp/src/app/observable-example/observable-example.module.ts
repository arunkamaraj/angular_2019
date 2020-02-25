import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableExampleComponent } from './observable-example.component';
import { RouterModule } from '@angular/router';
import { DebounceExampleComponent } from './debounce-example/debounce-example.component';

@NgModule({
  declarations: [ ObservableExampleComponent, DebounceExampleComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ObservableExampleModule { }
