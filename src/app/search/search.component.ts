import { Component, OnInit, Input } from '@angular/core';
import { YoutubeService } from "../youtube.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ YoutubeService ]
})
export class SearchComponent implements OnInit {

   @Input() searchResults: Array<any>;

  constructor(private service: YoutubeService) {
    console.log('searchResults', this.searchResults);
  }

  ngOnInit(): void {
    this.searchResults = [];
  }

}
