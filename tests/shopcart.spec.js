import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://attestify-us.com/intv/prod/shopping-product-list.html');
  const title = await page.title();
  await expect(page.getByRole('heading', { name: '🛒 Buggy Shopping Cart' })).toBeVisible();
  await page.getByRole('button', { name: 'Add to Cart' }).first().click();
  await page.getByRole('button', { name: 'Add to Cart' }).nth(1).click();
  await page.getByRole('button', { name: 'Add to Cart' }).nth(2).click();
  await expect(page.getByText('Banana x 1 - $1.00 Remove')).toBeVisible();
  await expect(page.getByText('Apple x 1 - $1.50 Remove')).toBeVisible();
  await expect(page.locator('#cart-title')).toContainText('SHOPPING CART.');
  await page.getByText('Total: $').click();
  await page.getByRole('button', { name: 'Add to Cart' }).nth(1).click();
  await page.getByRole('button', { name: 'Remove' }).nth(3).click();
  await page.getByRole('button', { name: 'Add to Cart' }).nth(1).click();
  await page.getByRole('spinbutton', { name: 'Quantity' }).nth(1).click();
  await page.getByRole('spinbutton', { name: 'Quantity' }).nth(1).fill('0');
  await page.getByRole('button', { name: 'Add to Cart' }).nth(1).click();
  await expect(page.getByText('Apple x 0 - $0.00 Remove')).toBeVisible();
  await page.locator('.checkout-btn').click()
  await page.locator('#checkout-summary-title').isVisible() 
  await page.getByText ('Grand Total$').isVisible() 
 
  
  
  
});
