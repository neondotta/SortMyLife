import { SortMyLifePage } from './app.po';

describe('sort-my-life App', () => {
  let page: SortMyLifePage;

  beforeEach(() => {
    page = new SortMyLifePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
