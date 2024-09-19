import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, MainPageComponent, WelcomeComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  exports: [MainPageComponent, WelcomeComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
