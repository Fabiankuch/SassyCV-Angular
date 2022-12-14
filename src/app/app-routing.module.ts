import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animationState: 'One' }},
  { path: 'about', component: AboutComponent, data: { animationState: 'Two' }},
  { path: 'projects', component: ProjectsComponent, data: { animationState: 'Three' }},
  { path: 'contact', component: ContactComponent, data: { animationState: 'Four' }},
  { path: '', component: HomeComponent, data: { animationState: 'One' }},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
