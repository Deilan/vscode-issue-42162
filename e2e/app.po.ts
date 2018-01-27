import { browser, element, by } from 'protractor';

export class IndexPage {
  navigateTo() {
    return browser.get('/');
  }
}
