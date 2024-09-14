import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Home } from './air-quality-dashboard/presentation/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    Home
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
