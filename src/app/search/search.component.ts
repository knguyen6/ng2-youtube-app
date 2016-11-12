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
  errorMessage: any;

  constructor(private service: YoutubeService) {}

  ngOnInit(): void {
    this.searchResults = [];
  }

  onKey(event, searchString) {
    if(event.keyCode == 13){
      this.service
        .search(searchString)
        .subscribe(
          (response) => { this.searchResults = response.items },
          (error) => { this.errorMessage = error }
        );
    }
  }

}
