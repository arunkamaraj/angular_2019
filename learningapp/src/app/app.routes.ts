import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { CdZoneComponent } from './cd-strategy/cd-zone/cd-zone.component';
import { CompPropertyComponent } from './comp-property/comp-property.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DirectiveTypeComponent } from './directive-type/directive-type.component';
import { StructuralComponent } from './directive-type/structural/structural.component';
import {AttributeComponent } from './directive-type/attribute/attribute.component';
import { CustomComponent } from './directive-type/custom/custom.component';
import { TempleteReferenceComponent } from './templete-reference/templete-reference.component';
import { ViewReferenceComponent } from './templete-reference/view-reference/view-reference.component';
import { ContentReferenceComponent } from './templete-reference/content-reference/content-reference.component';
import { ContentDataComponent } from './templete-reference/content-reference/content-data/content-data.component';
import { LifeCycleHookComponent } from './life-cycle-hook/life-cycle-hook.component';
import { HookAfterContentInitComponent } from './life-cycle-hook/hook-after-content-init/hook-after-content-init.component';
import { HookAfterContentCheckedComponent } from './life-cycle-hook/hook-after-content-checked/hook-after-content-checked.component';
import { HookAfterViewInitComponent } from './life-cycle-hook/hook-after-view-init/hook-after-view-init.component';
import { HookAfterViewCheckedComponent } from './life-cycle-hook/hook-after-view-checked/hook-after-view-checked.component';
import { DIExampleComponent } from './di-example/di-example.component';
import { RoutingExampleComponent } from './routing-example/routing-example.component';
import { PeporoniComponent } from './routing-example/peporoni/peporoni.component';
import { EverythingComponent } from './routing-example/everything/everything.component';
import { ObservableExampleComponent } from './observable-example/observable-example.component';
import { DebounceExampleComponent } from './observable-example/debounce-example/debounce-example.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            // Fallback
            { path: '', redirectTo: 'app-homepage', pathMatch: 'full' },

            // Home page
            { path: 'app-homepage', component: HomepageComponent },

            // change detecion zone
            { path: 'app-cd-zone', component: CdZoneComponent },

            // component property
            { path: 'app-comp-property', component: CompPropertyComponent},

            // directive type
            { path: 'app-directive-type',
                component: DirectiveTypeComponent,
                children: [ { path: 'app-structural', component: StructuralComponent},
                            { path: 'app-attribute', component: AttributeComponent},
                            { path: 'app-custom', component: CustomComponent}
                        ]
            }, // if specify the child we need to specify the router-outlet in the child

            //template ref
            { path: 'app-templete-reference',
                component: TempleteReferenceComponent
            },

            { path: 'app-templete-reference/app-view-reference', component: ViewReferenceComponent},
            { path: 'app-templete-reference/app-content-data', component: ContentDataComponent},

            // { path: 'app-directive-type/app-structural', component: StructuralComponent},
            // { path: 'app-directive-type/app-attribute', component: AttributeComponent}


            // life cycle hook
            { path: 'app-life-cycle-hook', component: LifeCycleHookComponent,
                    children: [ { path: 'app-hook-after-content-init', component: HookAfterContentInitComponent},
                    { path: 'app-hook-after-content-checked', component: HookAfterContentCheckedComponent},
                    { path: 'app-hook-after-view-init', component: HookAfterViewInitComponent},
                    { path: 'app-hook-after-view-checked', component: HookAfterViewCheckedComponent}
                ]
            },
            // DI
            { path: 'app-di-example', component: DIExampleComponent},

            // Routing example
            { path: 'app-routing-example', component: RoutingExampleComponent,

                children: [
                    // sample routing pizza example
                    { path : 'app-peporoni', component: PeporoniComponent},
                    { path : 'app-everything/:size', component: EverythingComponent}
                ]
            },

            // observable
            { path: 'app-observable-example', component: ObservableExampleComponent,
                    children: [ { path: 'app-debounce-example', component: DebounceExampleComponent},
                    ]
            },

        ]

    },
    { path: '**', redirectTo: 'app-homepage', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules, useHash: true,  enableTracing: false /*, initialNavigation: 'enabled'*/
});
