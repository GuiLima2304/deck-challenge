import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent {
  @Input() tweetSaved: string = '';
  // public listTweets: Array<string> = [];
  public listTweets: Array<any> = [];
  tweetSelecionado: any;


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

      this.listTweets.push({id: this.generateGuid(), tweet: this.tweetSaved});
      localStorage.setItem("listTweets", JSON.stringify(this.listTweets));
      this.tweetSaved = '';
    }
  }

  public selecioneItem(item: any) {
    this.tweetSelecionado = item;
  }

  public deleteTweet() {
    let list: [] = this.getList();
    let finalList = list.filter((item: any) => item.id !== this.tweetSelecionado.id);

    localStorage.setItem("listTweets", JSON.stringify(finalList));
    window.location.reload();
  }

  private generateGuid() : string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  public getList(): any {
      return JSON.parse(localStorage.getItem("listTweets") || '[]')
  }
}
