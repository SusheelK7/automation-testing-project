import {Page} from "@playwright/test"

export class CheckoutPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async  fillCheckoutDetails(firstName: string, lastName: string, zipCode: string) {
    await this.page.fill('[data-test="firstName"]', firstName);
    await this.page.fill('[data-test="lastName"]', lastName);
    await this.page.fill('[data-test="postalCode"]', zipCode);
    await this.page.click('[data-test="continue"]');
  }

  async finishOrder() {
    await this.page.click('[data-test="finish"]');
  }

  async isOrderSuccess() {
    return this.page.isVisible('text="Thank you for your order!"');
  }
}