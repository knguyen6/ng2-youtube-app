import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ YoutubeService ]
})
export class AppComponent implements OnInit {

  public content: Array<any>;

  public selected: string;

  public apiCalls: any;

  public apis: Array<string>;

  public errorMessage: any;

  public placeHolderMessage: string;

  public searchText: string;

  constructor(private service: YoutubeService) {}

  ngOnInit(): void {
    this.apiCalls = {
      search: 'Enter keyword to search',
      videos: 'Enter video ID',
      channels: 'Enter channel ID'
    };
    this.placeHolderMessage = this.apiCalls.search;
    this.apis = Object.keys(this.apiCalls);
    this.selected = Object.keys(this.apiCalls)[0];
  }

  setSelected(selected: string): void {
    this.selected = selected;
    this.placeHolderMessage = this.apiCalls[selected];
    this.searchText='';
  }

  onKey(searchString):void {
    this.callYoutubeApi(searchString);
  }

  private callYoutubeApi(searchString: string): void {
    this.service[this.selected](searchString)
      .subscribe(
        (response) => { console.log(response); this.content = response.items; },
        (error) => { this.errorMessage = error }
      );
  }
}
