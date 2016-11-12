import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { VideoComponent } from './video/video.component';
import { ChannelComponent } from './channel/channel.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    VideoComponent,
    ChannelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: SearchComponent },
      { path: 'search', component: SearchComponent },
      { path: 'video/:id', component: VideoComponent },
      { path: 'channel/:id', component: ChannelComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
