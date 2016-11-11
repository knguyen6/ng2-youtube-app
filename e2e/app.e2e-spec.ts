import { SimpleYoutubeAppPage } from './app.po';

describe('simple-youtube-app App', function() {
  let page: SimpleYoutubeAppPage;

  beforeEach(() => {
    page = new SimpleYoutubeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
