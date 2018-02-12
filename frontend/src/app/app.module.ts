import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';

import { routing } from './app.routing';

// SERVICES
import { ApiService } from './services/api.service';

// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InterviewComponent } from './interview/interview.component';
import { DirectoryComponent } from './directory/directory.component';
import { HeaderLogoComponent } from './shared/header-logo/header-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    InterviewComponent,
    DirectoryComponent,
    HeaderLogoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
  ],
  providers: [
    AppComponent,
    ApiService,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
