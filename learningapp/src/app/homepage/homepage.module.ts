import { NgModule } from '@angular/core';

import { HomepageComponent } from './homepage.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    ],
declarations: [
  HomepageComponent ,
],
exports: [HomepageComponent],


})
export class HomepageModule {}
