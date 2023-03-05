import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Common1Component } from './common1/common1.component';
import { Common2Component } from './common2/common2.component';
import { Common3Component } from './common3/common3.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { Common4Component } from './common4/common4.component';


@NgModule({
  declarations: [
    AppComponent,
    Common1Component,
    Common2Component,
    Common3Component,
    OpenCloseComponent,
    Common4Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
