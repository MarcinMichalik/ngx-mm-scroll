import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { NgxMMScroll } from 'ngx-mm-scroll';
import { HomeComponent } from './home/home.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ClipboardModule} from 'ngx-clipboard/dist';
import {FormsModule} from '@angular/forms';
import {HighlightJsModule} from 'angular2-highlight-js';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMMScroll.forRoot(),
    ModalModule.forRoot(),
    ClipboardModule,
    FormsModule,
    HighlightJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
