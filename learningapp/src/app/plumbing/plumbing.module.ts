import { LoadingRouterOutlet } from './loading-router-outlet';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [LoadingRouterOutlet],
    imports: [RouterModule],
    exports: [LoadingRouterOutlet]
})
export class PlumbingModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: PlumbingModule,
            };
    }
}
