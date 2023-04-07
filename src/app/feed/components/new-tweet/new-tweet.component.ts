import { Component } from '@angular/core';

@Component({
  selector: 'new-tweet',
  templateUrl: './new-tweet.component.html',
  styleUrls: ['./new-tweet.component.css']
})
export class NewTweetComponent {
  public tweet: string;

  constructor() {
    this.tweet = '';
  }
}
