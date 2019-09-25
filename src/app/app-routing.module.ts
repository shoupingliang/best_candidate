import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactMeComponent } from './contact-me'
import { AboutMeComponent } from './about-me';
import { PostsComponent } from './posts';

const routes: Routes = [
  {path: 'contactme', component: ContactMeComponent}, 
  {path: 'aboutme', component: AboutMeComponent },
  {path: '', component: PostsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
