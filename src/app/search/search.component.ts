import { Component, OnInit } from '@angular/core';
import { YoutubeService } from "../youtube.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ YoutubeService ]
})
export class SearchComponent implements OnInit {
  videos: Array<any>;
  errorMessage: any;

  constructor(private service: YoutubeService) {}

  ngOnInit(): void {
    this.videos = [];
  }

  search(searchString: string): void {
    this.service.search(searchString)
      .subscribe(
        (response) => { this.videos = response.items },
        (error) => { this.errorMessage = error }
      );
  }


//key event for search box
  onKey(event, searchString) {
    if(event.keyCode == 13){
        //pass input value search function 
        console.log("hey you wanna search for ? ", searchString);
    }
  }

}
