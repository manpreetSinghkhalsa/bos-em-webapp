import { BosAppPage } from './app.po';

describe('bos-app App', function() {
  let page: BosAppPage;

  beforeEach(() => {
    page = new BosAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
