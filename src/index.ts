import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxMMScrollService} from './ngx-mm-scroll.service';
import {NgxMMScrollToElDirective} from './ngx-mm-scroll-to-el.directive';
import {NgxMMScrollElDirective} from './ngx-mm-scroll-el.directive';
import {NgxMMScrollIntoViewDirective} from './ngx-mm-scroll-into-view.directive';

export * from './ngx-mm-scroll.service';
export * from './ngx-mm-scroll-to-el.directive';
export * from './ngx-mm-scroll-el.directive';
export * from './ngx-mm-scroll-into-view.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        NgxMMScrollToElDirective,
        NgxMMScrollElDirective,
        NgxMMScrollIntoViewDirective
    ],
    exports: [
        NgxMMScrollToElDirective,
        NgxMMScrollElDirective,
        NgxMMScrollIntoViewDirective
    ]
})
export class NgxMMScroll {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgxMMScroll,
            providers: [NgxMMScrollService]
        };
    }
}
