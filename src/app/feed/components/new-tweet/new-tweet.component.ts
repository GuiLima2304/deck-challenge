import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'new-tweet',
  templateUrl: './new-tweet.component.html',
  styleUrls: ['./new-tweet.component.css']
})
export class NewTweetComponent {
  public tweet: string;
  @Output() emitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.tweet = '';
  }

  public saveTweet() {
    this.emitter.emit(this.tweet);
    this.tweet = '';
  }
}
