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

  public apiCalls: Array<string>;

  public errorMessage: any;

  constructor(private service: YoutubeService) {}

  ngOnInit(): void {
    this.selected = 'SEARCH';
    this.apiCalls = ['SEARCH', 'VIDEO', 'CHANNEL'];
  }

  setSelected(selected: string): void {
    this.selected = selected;
  }

  onKey(event, searchString):void {
    if(event.keyCode == 13) {
      switch(this.selected) {
        case 'SEARCH':
          console.log('invoking search service');
          this.service
            .search(searchString)
            .subscribe(
              (response) => { console.log(response); this.content = response.items; },
              (error) => { this.errorMessage = error }
            );
          break;
        case 'VIDEO':
          console.log('invoking video service');
          this.service
            .viewVideo(searchString)
            .subscribe(
              (response) => { console.log(response); this.content = response.items; },
              (error) => { this.errorMessage = error }
            );
          break;
        case 'CHANNEL':
          console.log('invoking channel service');
          this.service
            .viewChannel(searchString)
            .subscribe(
              (response) => { console.log(response); this.content = response.items; },
              (error) => { this.errorMessage = error }
            );
          break;
        default:
          this.service
            .search(searchString)
            .subscribe(
              (response) => { console.log(response); this.content = response.items; },
              (error) => { this.errorMessage = error }
            );
          break;
      }
    }
  }
}
