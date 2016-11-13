import { Component, OnInit } from '@angular/core';
import { YoutubeService } from "../youtube.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ YoutubeService ]
})
export class SearchComponent implements OnInit {

   searchResults: Array<any>;

  constructor(private service: YoutubeService) {}

  ngOnInit(): void {
    this.searchResults = [];
  }

}
