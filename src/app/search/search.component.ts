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

  search(searchString: string): void {
    this.service.search(searchString)
      .subscribe(
        (response) => { this.searchResults = response.items },
        (error) => { this.errorMessage = error }
      );
  }

  onKey(event, searchString) {
    if(event.keyCode == 13){
        //pass input value search function
        console.log("hey you wanna search for ? ", searchString);
    }
  }

}
