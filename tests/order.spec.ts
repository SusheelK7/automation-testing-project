import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { ProductPage } from '../Pages/ProductPage'
import { CartPage } from '../Pages/CartPage'
import { CheckoutPage } from '../Pages/CheckoutPage'

test('User Places an Order Successfully', async ({page}) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  await productPage.addProductToCart();
  await productPage.goToCart();

  expect(await cartPage.verifyProductInCart()).toBeTruthy();

  await cartPage.proceedToCheckout();
  await checkoutPage.fillCheckoutDetails('John', 'Doe', '12345');
  await checkoutPage.finishOrder();

  expect(await checkoutPage.isOrderSuccess()).toBeTruthy();
});