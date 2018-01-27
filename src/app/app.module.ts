import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRouterModule } from './app-router/app-router.module';


import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { DashbordComponent } from './dashbord/dashbord.component';


@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
