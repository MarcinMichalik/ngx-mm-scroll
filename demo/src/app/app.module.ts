import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { NgxMMScroll } from 'ngx-mm-scroll';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMMScroll.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
