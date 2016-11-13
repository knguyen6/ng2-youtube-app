import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './youtube.service';
import {SELECT_VALUE_ACCESSOR} from "@angular/forms/src/directives/select_control_value_accessor";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ YoutubeService ]
})
export class AppComponent implements OnInit {

  content: Array<any>;

  selected: API;

  errorMessage: any;

  constructor(private service: YoutubeService) {}

  ngOnInit(): void {
    this.selected = API.SEARCH;
  }

  onKey(event, searchString):void {
    if(event.keyCode == 13) {
      console.log(searchString);
      this.service
        .search(searchString)
        .subscribe(
          (response) => { console.log(response); this.content = response.items; },
          (error) => { this.errorMessage = error }
        );
    }
  }
}

enum API {
  SEARCH,
  VIDEOS,
  CHANNELS
}
