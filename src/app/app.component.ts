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
      SEARCH: 'Enter keyword to search',
      VIDEO: 'Enter video ID',
      CHANNEL: 'Enter channel ID'
    };
    this.placeHolderMessage = this.apiCalls.SEARCH;
    this.apis = Object.keys(this.apiCalls);
    this.selected = Object.keys(this.apiCalls)[0];
  }

  setSelected(selected: string): void {
    this.selected = selected;
    this.placeHolderMessage = this.apiCalls[selected];
    this.searchText='';
  }

  onKey(searchString):void {
    const keys = Object.keys(this.apiCalls);
    switch(this.selected) {
      case keys[0]:
        console.log('invoking search service');
        this.service['search'](searchString)
          .subscribe(
            (response) => {console.log(response); this.content = response.items; },
            (error) => { this.errorMessage = error }
          );
        break;
      case keys[1]:
        console.log('invoking video service');
        this.service
          .viewVideo(searchString)
          .subscribe(
            (response) => { console.log(response); this.content = response.items; },
            (error) => { this.errorMessage = error }
          );
        break;
      case keys[2]:
        console.log('invoking channel service');
        this.service
          .viewChannel(searchString)
          .subscribe(
            (response) => { console.log(response); this.content = response.items; },
            (error) => { this.errorMessage = error }
          );
        break;
      default:
        this.service['search'](searchString)
          .subscribe(
            (response) => { console.log(response); this.content = response.items; },
            (error) => { this.errorMessage = error }
          );
        break;
    }
  }

  callYoutubeApi(api: string, searchString: string): void {
    this.service[api](searchString)
      .subscribe(
        (response) => { console.log(response); this.content = response.items; },
        (error) => { this.errorMessage = error }
      );
  }
}
