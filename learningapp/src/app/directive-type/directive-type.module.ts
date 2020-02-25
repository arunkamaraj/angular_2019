import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveTypeComponent } from './directive-type.component';
import { StructuralComponent } from './structural/structural.component';
import { AttributeComponent } from './attribute/attribute.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomComponent } from './custom/custom.component';
import { SizerDirective } from './custom/sizer.directive';

@NgModule({
  declarations: [
    DirectiveTypeComponent,
    StructuralComponent,
    AttributeComponent,
    CustomComponent,
    SizerDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [ DirectiveTypeComponent ]
})
export class DirectiveTypeModule { }
