import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GenaralComponent } from './genaral/genaral.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'genaral', component: GenaralComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
