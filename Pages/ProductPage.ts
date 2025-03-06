import { Page } from '@playwright/test';

export class ProductPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addProductToCart() {
    await this.page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}