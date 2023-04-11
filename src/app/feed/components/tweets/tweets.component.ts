import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent {
  @Input() tweetSaved: string = '';
  public listTweets: Array<string> = [];

  constructor(private ref: ChangeDetectorRef) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['tweetSaved'].currentValue && changes['tweetSaved'].currentValue) {

      if(localStorage.getItem("listTweets") && this.listTweets.length === 0) {
        let listTweetsBefore =  JSON.parse(localStorage.getItem("listTweets") || '[]');

        listTweetsBefore.forEach((element: string) => {
          this.listTweets.push(element);
        });
      }
      this.listTweets.push(this.tweetSaved);
      localStorage.setItem("listTweets", JSON.stringify(this.listTweets))
      this.tweetSaved = '';
    }
  }


  public getList(): any {
      return JSON.parse(localStorage.getItem("listTweets") || '[]')
  }
}
