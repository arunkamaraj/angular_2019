import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempleteReferenceComponent } from './templete-reference.component';
import { ViewReferenceComponent } from './view-reference/view-reference.component';
import { ContentReferenceComponent } from './content-reference/content-reference.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ContentDataComponent } from './content-reference/content-data/content-data.component';

@NgModule({
  declarations: [
    TempleteReferenceComponent,
    ViewReferenceComponent,
    ContentReferenceComponent,
    ContentDataComponent,
    // CustomButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class TempleteReferenceModule { }
