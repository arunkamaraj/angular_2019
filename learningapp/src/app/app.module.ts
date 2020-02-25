import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { CdZoneModule } from './cd-strategy/cd-zone/cd-zone.module';
import { CompPropertyModule } from './comp-property/comp-property.modules';
import { DiExampleModule } from './di-example/di-example.module';
import { DirectiveTypeModule } from './directive-type/directive-type.module';
import { HomepageModule } from './homepage/homepage.module';
import { LifeCycleHookModule } from './life-cycle-hook/life-cycle-hook.module';
import { ObservableExampleModule } from './observable-example/observable-example.module';
import { PlumbingModule } from './plumbing/plumbing.module';
import { RoutingExampleModule } from './routing-example/routing-example.module';
import { SharedModule } from './shared/shared.module';
import { TempleteReferenceModule } from './templete-reference/templete-reference.module';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    routing,
    BrowserModule,
    HomepageModule,
    CdZoneModule,
    PlumbingModule,
    CompPropertyModule,
    DirectiveTypeModule,
    TempleteReferenceModule,
    SharedModule,
    LifeCycleHookModule,
    DiExampleModule,
    RoutingExampleModule,
    ObservableExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
