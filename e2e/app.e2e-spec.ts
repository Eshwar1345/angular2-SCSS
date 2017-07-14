import { Angular2SCSSPage } from './app.po';

describe('angular2-scss App', () => {
  let page: Angular2SCSSPage;

  beforeEach(() => {
    page = new Angular2SCSSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
