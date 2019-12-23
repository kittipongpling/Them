import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ProfileComponent } from './profile/profile.component';
import { GenaralComponent } from './genaral/genaral.component';
import { AboutComponent } from './about/about.component';


const AppRoutes: Routes = [


]




@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    ProfileComponent,
    GenaralComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
