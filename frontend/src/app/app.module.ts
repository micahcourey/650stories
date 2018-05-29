import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Response } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ShareModule } from '@ngx-share/core';
import { RouterModule } from '@angular/router';

// ROUTING
import { routing } from './app.routing';

// SERVICES
import { ApiService } from './services/api.service';
import { NgxScrollSignalService } from './services/ngx-scroll-signal.service';

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
import { Story404Component } from './story-404/story-404.component';
import { ScrollPositionBarComponent } from './shared/scroll-position-bar/scroll-position-bar.component';
import { ImagePairComponent } from './interview/image-pair/image-pair.component';
import { PhotoStripComponent } from './interview/photo-strip/photo-strip.component';
import { BigImageComponent } from './interview/big-image/big-image.component';
import { NewlineReplacerPipe } from './pipes/newline-replacer.pipe';

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
    InterviewFooterComponent,
    Story404Component,
    ScrollPositionBarComponent,
    ImagePairComponent,
    PhotoStripComponent,
    BigImageComponent,
    NewlineReplacerPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    routing,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ShareModule.forRoot(),
  ],
  providers: [
    AppComponent,
    ApiService,
    HttpClientModule,
    FormsModule,
    NgxScrollSignalService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
