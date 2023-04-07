import { Component } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  public tweetPosted: string;

  constructor() {
    this.tweetPosted = '';
  }

  public receiveTweet(tweet: string) {
    this.tweetPosted = tweet;
  }
}
