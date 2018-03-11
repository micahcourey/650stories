import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InterviewComponent } from './interview/interview.component';
import { DirectoryComponent } from './directory/directory.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'interview', component: InterviewComponent },
  { path: 'interview/:id', component: InterviewComponent },
  { path: 'directory', component: DirectoryComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
