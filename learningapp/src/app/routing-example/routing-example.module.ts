import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingExampleComponent } from './routing-example.component';
import { PeporoniComponent } from './peporoni/peporoni.component';
import { EverythingComponent } from './everything/everything.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RoutingExampleComponent,
    PeporoniComponent,
    EverythingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class RoutingExampleModule { }
