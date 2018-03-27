import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InterviewComponent } from './interview/interview.component';
import { DirectoryComponent } from './directory/directory.component';
import { Story404Component} from './story-404/story-404.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'home' } },
  { path: 'about', component: AboutComponent, data: { animation: 'about' } },
  { path: 'interview', component: InterviewComponent, data: { animation: 'interview' } },
  { path: 'interview/:slug', component: InterviewComponent, data: { animation: '**' } },
  { path: 'directory', component: DirectoryComponent, data: { animation: 'directory' } },
  { path: '**', component: Story404Component },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
