import { Inject, Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import {API_KEY, YOUTUBE_SEARCH_API} from './app.globals';
import { Observable } from 'rxjs';

Injectable()
export class YoutubeService {

  constructor(@Inject(Http) public http: Http) {}

  search(searchString: string): Observable<any> {
    let options = { search: this.buildParams(searchString) };

    return this.http
      .get(YOUTUBE_SEARCH_API, options)
      .map((response: Response) => { JSON.parse(response['_body']); })
      .catch(error => Observable.throw(error));
  }

  buildParams(searchString: string): URLSearchParams {
    let params = new URLSearchParams();
    params.set('key', API_KEY);
    params.set('q', searchString);
    params.set('part', 'snippet');
    params.set('maxResults', '20');
    params.set('order', 'relevance');
    return params;
  }
}
