import { MisTareasAngularPage } from './app.po';

describe('mis-tareas-angular App', () => {
  let page: MisTareasAngularPage;

  beforeEach(() => {
    page = new MisTareasAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
