import { NgModule } from '@angular/core';
import { CdZoneComponent } from './cd-zone.component';
import { RouterModule } from '@angular/router';
import { CdDefaultComponent } from './cd-default/cd-default.component';
import { CdOnpushComponent } from './cd-onpush/cd-onpush.component';
import { CdAsynchronousApiComponent } from './cd-asynchronous-api/cd-asynchronous-api.component';
import { CdExplicitComponent } from './cd-explicit/cd-explicit.component';

@NgModule({
    imports: [
        RouterModule,
    ],
    declarations: [
        CdZoneComponent,
        CdDefaultComponent,
        CdOnpushComponent,
        CdAsynchronousApiComponent,
        CdExplicitComponent

    ],
    exports: [CdZoneComponent],
})
export class CdZoneModule {}
