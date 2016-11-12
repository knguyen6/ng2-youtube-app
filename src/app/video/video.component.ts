import { Component, OnInit } from '@angular/core';
import { YoutubeService } from "../youtube.service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  providers: [YoutubeService]
})
export class VideoComponent implements OnInit {
  videoDetail: Array<any>;
  errorMessage: any;
  constructor(private service: YoutubeService) {}

    ngOnInit():void {
        this.videoDetail = [];
    }
//Test videoId: zQCc2eybk9I
    searchVideo(event, videoId):void{

        if(event.keyCode == 13){
            this.service.viewVideo(videoId)
            .subscribe(
              (response) => {
                  console.log(response.items)
                  this.videoDetail = response.items;
              },
              (error) => { this.errorMessage = error }
          );
        }
    }
}
