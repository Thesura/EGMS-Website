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
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StaffService} from './services/user/staff.service';
import {NonStaffService} from './services/user/non-staff.service';
import {ScheduleService} from './services/schedule/schedule.service';
import {PathsService} from './services/cfg/paths.service';
import { LoginStaffComponent } from './login-staff/login-staff.component';
import {AuthGuardService} from './services/auth-guard/auth-guard.service';
import {AdminAuthGuardService} from './services/auth-guard/admin-auth-guard.service';
import {MapService} from './services/map/map.service';
import {ReportService} from './services/report/report.service';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    CreateScheduleComponent,
    LoginStaffComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LandingComponent},
      { path: 'login', component: LoginComponent},
      { path: 'login-staff' , component: LoginStaffComponent},
      { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
      { path: 'map', component: MapComponent},
      { path: 'report', component: ReportComponent, canActivate: [AuthGuardService]},
      { path: 'schedule', component: ScheduleComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'admin-panel', component: AdminPanelComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
      { path: 'create-schedule', component: CreateScheduleComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
      { path: 'outages', component: OutagesComponent},
      { path: 'profile', component: ProfileComponent, canActivate : [AuthGuardService]}
    ]),
    HttpClientModule
  ],
  providers: [
    StaffService,
    NonStaffService,
    ScheduleService,
    MapService,
    OutagesComponent,
    ReportService,
    AuthGuardService,
    AdminAuthGuardService,
    PathsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
