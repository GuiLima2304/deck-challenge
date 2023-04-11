import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { TweetsComponent } from './feed/components/tweets/tweets.component';
import { NewTweetComponent } from './feed/components/new-tweet/new-tweet.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './feed/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    TweetsComponent,
    NewTweetComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
