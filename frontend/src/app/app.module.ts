import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';

// COMPONENTS
import { AppComponent } from './app.component';

// SERVICES
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    AppComponent,
    ApiService,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
