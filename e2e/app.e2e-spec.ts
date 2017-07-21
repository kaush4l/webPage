import { WebPagePage } from './app.po';

describe('web-page App', () => {
  let page: WebPagePage;

  beforeEach(() => {
    page = new WebPagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
