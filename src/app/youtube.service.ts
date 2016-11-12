import { Inject, Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import {API_KEY, YOUTUBE_SEARCH_API, YOUTUBE_CHANNELS_API, YOUTUBE_VIDEOS_API } from './app.globals';
import { Observable } from 'rxjs';

Injectable()
export class YoutubeService {

  constructor(@Inject(Http) public http: Http) {}

  search(searchString: string): Observable<any> {
    let options = { search: this.buildParams({
      key: API_KEY,
      q: searchString,
      part: 'snippet',
      maxResults: '20',
      order: 'relevance'
    }) };

    return this.http
      .get(YOUTUBE_SEARCH_API, options)
      .map((response: Response) => { return JSON.parse(response['_body']); })
      .catch(error => Observable.throw(error));
  }

  viewChannel(channelId: string): Observable<any> {
    let options = this.buildParams({
      key: API_KEY,
      part: `contentDetails,contentOwnerDetails,id,snippet,statistics,status,topicDetails`,
      id: channelId
    });

    return this.http
      .get(`${YOUTUBE_CHANNELS_API}?${options.toString()}`)
      .map((response: Response) => { return JSON.parse(response['_body']); })
      .catch(error => Observable.throw(error));
  }

  viewVideo(videoId: string): Observable<any>{
      let options = this.buildParams({
          key: API_KEY,
          part:`contentDetails,id, snippet,topicDetails`,
          id: videoId
      });
      return this.http
      .get(`${YOUTUBE_VIDEOS_API}?${options.toString()}`)
      .map((response: Response) => { return JSON.parse(response['_body']); })
      .catch(error => Observable.throw(error));
  }

  buildParams(parameters: any): URLSearchParams {
    let params = new URLSearchParams();
    for (let param of Object.keys(parameters)) {
      params.set(param, parameters[param]);
    }
    return params;
  }
}
