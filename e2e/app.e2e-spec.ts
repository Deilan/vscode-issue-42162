import { IndexPage } from './app.po';

describe('Index Page', function() {
  let page: IndexPage;

  beforeEach(() => {
    page = new IndexPage();
  });

  it('should create the app', () => {
    page.navigateTo();
    expect(page).toBeTruthy();
  });
});
