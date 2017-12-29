import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { NgxMMScrollService } from './ngx-mm-scroll.service';

export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './ngx-mm-scroll.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleComponent,
    SampleDirective,
    SamplePipe
  ],
  exports: [
    SampleComponent,
    SampleDirective,
    SamplePipe
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
