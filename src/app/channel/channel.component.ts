import { Component, OnInit, Input } from '@angular/core';
import { YoutubeService } from "../youtube.service";

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css'],
  providers: [ YoutubeService ]
})
export class ChannelComponent implements OnInit {
  @Input() channelResults: Array<any>;
  errorMessage: any;

  constructor(private service: YoutubeService) {}

  ngOnInit(): void {
    this.channelResults = [];
  }

  onKey(event, channelId) {
    if(event.keyCode == 13){
      this.service
        .viewChannel(channelId)
        .subscribe(
          response => this.channelResults = response.items,
          error => this.errorMessage = error
        );
    }
  }

}
