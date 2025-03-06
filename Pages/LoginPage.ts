import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(){
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', 'standard_user');
    await this.page.fill('#password', 'secret_sauce');
    await this.page.click('#login-button');
  }

  async isOnProductPage() {
    return this.page.url().includes('/inventory.html');
  }
}