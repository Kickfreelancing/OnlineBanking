import { OnlineBankingPage } from './app.po';

describe('online-banking App', function() {
  let page: OnlineBankingPage;

  beforeEach(() => {
    page = new OnlineBankingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
