// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test.
  await page.goto('/');
});

test('all products are visible', async ({ page }) => {
  await expect(page.locator('div > .product-grid-item')).toHaveCount(30);
});

test('search returns correct results', async ({ page }) => {
  // enter search term
  await page.getByPlaceholder('Search for products by name...').fill('powder');
  // check for result on page
  await expect(page.getByRole('paragraph', { name: 'Powder Canister' }));
});

test('category filters correct products', async ({ page }) => {
  // click the category
  await page.getByRole('button', { name: 'furniture' }).click();

  // check the returned results
  await expect(page.getByRole('paragraph', { name: 'Annibale Colombo Bed' }));
  await expect(page.getByRole('paragraph', { name: 'Bedside Table African Cherry' }));
});

test('favouriting a product', async ({ page }) => {
  // get the specific grid item
  const productCard = page.locator('.product-grid-item').filter({ hasText: 'Red Lipstick' });

  // find the svg in that item and click it
  await productCard.locator('svg.lucide-heart').click();

  // check heart is toggled
  await expect(productCard.locator('svg.lucide-heart')).toHaveAttribute('fill', '#ef4444');
});

test('clicking favourites buttons displays favourites view', async ({ page }) => {
  await page.getByRole('button', { name: 'Favourites' }).click();

  await expect(
    page.getByRole('paragraph', {
      name: 'Showing 0 products. You are viewing your favourited products.',
    })
  );
});

test('favourited products appear in favourites view', async ({ page }) => {
  await page
    .locator('.product-grid-item')
    .filter({ hasText: 'Red Lipstick' })
    .locator('svg.lucide-heart')
    .click();

  await page.getByRole('button', { name: 'Favourites' }).click();

  await expect(
    page.getByRole('paragraph', {
      name: 'Showing 1 product. You are viewing your favourited products.',
    })
  );
  await expect(page.getByRole('paragraph', { name: 'Red Lipstick' }));
});

test('clicking a grid item opens the product detail view', async ({ page }) => {
  await page.locator('.product-grid-item').filter({ hasText: 'Apple' }).click();

  await expect(
    page.getByRole('paragraph', {
      name: 'Fresh and crisp apples, perfect for snacking or incorporating into various recipes.',
    })
  );
  await expect(
    page.getByRole('heading', {
      name: 'About this product',
    })
  );
});
