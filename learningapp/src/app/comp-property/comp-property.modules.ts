import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CompPropertyComponent } from './comp-property.component';
import { NonSingletonComponent } from './non-singleton/non-singleton.component';
import { SingletonsProviderComponent } from './singletons-provider/singletons-provider.component';
import { QueryComponent } from './query/query.component';
import { QueryContentComponent } from './query-content/query-content.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        CompPropertyComponent,
        SingletonsProviderComponent,
        NonSingletonComponent,
        QueryComponent,
        QueryContentComponent
    ],
    exports: [CompPropertyComponent],
})
export class CompPropertyModule {}
