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

//key event for search box
  onKey(event, searchString):void {
    if(event.keyCode == 13){
      this.service
        .search(searchString)
        .subscribe(
          (response) => { this.searchResults = response.items;console.log(response); },
          (error) => { this.errorMessage = error }
        );
    }
  }

}
