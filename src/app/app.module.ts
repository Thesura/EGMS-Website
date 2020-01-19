import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OptionsBarComponent } from './options-bar/options-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { TileComponent } from './tile/tile.component';
import { MapComponent } from './map/map.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ReportComponent } from './report/report.component';
import { RegisterComponent } from './register/register.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { OutagesComponent } from './outages/outages.component';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import {NgForm} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NgForm,
    HomeComponent,
    OptionsBarComponent,
    NavbarComponent,
    LandingComponent,
    TileComponent,
    MapComponent,
    ScheduleComponent,
    ReportComponent,
    RegisterComponent,
    AdminPanelComponent,
    OutagesComponent,
    CreateScheduleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: LandingComponent},
      { path: 'login', component: LoginComponent},
      { path: 'home', component: HomeComponent},
      { path: 'map', component: MapComponent},
      { path: 'report', component: ReportComponent},
      { path: 'schedule', component: ScheduleComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'admin-panel', component: AdminPanelComponent},
      { path: 'create-schedule', component: CreateScheduleComponent},
      { path: 'outages', component: OutagesComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
