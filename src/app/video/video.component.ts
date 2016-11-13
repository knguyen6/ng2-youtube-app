import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Input() videoDetail: Array<any>;
  errorMessage: any;
  constructor() {}

  ngOnInit(): void {
      this.videoDetail = [];
  }
}
