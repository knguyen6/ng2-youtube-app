import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

   @Input() searchResults: Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.searchResults = [];
  }

}
