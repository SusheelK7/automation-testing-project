import { Page } from '@playwright/test';

export class CartPage{
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyProductInCart() {
    return await this.page.isVisible('text="Sauce Labs Backpack"');
  }

  async proceedToCheckout() {
    await this.page.click('[data-test="checkout"]');
  }
}