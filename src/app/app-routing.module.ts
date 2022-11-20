import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { LandingComponent } from './components/landing/landing.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { SingleProjectComponent } from './components/single-project/single-project.component';

const routes: Routes = [
  {path: 'projects/:id', component: SingleProjectComponent},
  {path: 'projects', component: ProjectListComponent},
  {path: '', component: LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
