import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InterviewComponent } from './interview/interview.component';
import { DirectoryComponent } from './directory/directory.component';
import { Story404Component} from './story-404/story-404.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { state: 'home' } },
  { path: 'about', component: AboutComponent, data: { state: 'about' } },
  { path: 'interview', component: InterviewComponent, data: { state: 'interview' }  },
  { path: 'interview/:slug', component: InterviewComponent  },
  { path: 'directory', component: DirectoryComponent, data: { state: 'directory' }  },
  { path: '**', component: Story404Component },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
