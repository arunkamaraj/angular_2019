import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeCycleHookComponent } from './life-cycle-hook.component';
import { RouterModule } from '@angular/router';
import { HookAfterContentInitComponent } from './hook-after-content-init/hook-after-content-init.component';
import { MemberComponent } from './hook-after-content-init/member/member.component';
import { CrewComponent } from './hook-after-content-init/crew/crew.component';
import { HookAfterContentCheckedComponent } from './hook-after-content-checked/hook-after-content-checked.component';
import { CardComponent } from './hook-after-content-checked/card/card.component';
import { HookAfterViewInitComponent } from './hook-after-view-init/hook-after-view-init.component';
import { HookAfterViewCheckedComponent } from './hook-after-view-checked/hook-after-view-checked.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LifeCycleHookComponent,
    HookAfterContentInitComponent,
    MemberComponent,
    CrewComponent,
    HookAfterContentCheckedComponent,
    CardComponent,
    HookAfterViewInitComponent,
    HookAfterViewCheckedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class LifeCycleHookModule { }
