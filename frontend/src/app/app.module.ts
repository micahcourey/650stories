import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ShareModule } from '@ngx-share/core';

// ROUTING
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
import { InterviewCardsComponent } from './interview-cards/interview-cards.component';
import { StoryButtonComponent } from './story-button/story-button.component';
import { StoryFooterComponent } from './story-footer/story-footer.component';
import { StoryHeaderComponent } from './shared/story-header/story-header.component';
import { StoryNavComponent } from './shared/story-nav/story-nav.component';
import { InterviewHeaderComponent } from './interview/interview-header/interview-header.component';
import { ShareButtonsComponent } from './shared/share-buttons/share-buttons.component';
import { QAndAComponent } from './interview/q-and-a/q-and-a.component';
import { PullQuoteComponent } from './interview/pull-quote/pull-quote.component';
import { ShareButtonsVerticalComponent } from './shared/share-buttons-vertical/share-buttons-vertical.component';
import { InterviewFooterComponent } from './interview/interview-footer/interview-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    InterviewComponent,
    DirectoryComponent,
    HeaderLogoComponent,
    InterviewCardsComponent,
    StoryButtonComponent,
    StoryFooterComponent,
    StoryHeaderComponent,
    StoryNavComponent,
    InterviewHeaderComponent,
    ShareButtonsComponent,
    QAndAComponent,
    PullQuoteComponent,
    ShareButtonsVerticalComponent,
    InterviewFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
    ShareModule.forRoot(),
  ],
  providers: [
    AppComponent,
    ApiService,
    HttpClientModule,
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
