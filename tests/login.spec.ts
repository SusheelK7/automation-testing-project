import { test, expect } from '@playwright/test';

test('User should be able to login successfully', async ({ page }) => {
    // Go to the login page
    await page.goto('https://www.saucedemo.com/');

    // Enter valid username
    await page.fill('input[data-test="username"]', 'standard_user');

    // Enter valid password
    await page.fill('input[data-test="password"]', 'secret_sauce');

    // Click login button
    await page.click('input[data-test="login-button"]');

    // Verify login success (check if 'Products' text is visible)
    await expect(page.locator('.title')).toHaveText('Products');
});
