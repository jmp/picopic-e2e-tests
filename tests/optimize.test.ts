import {test, expect} from '@playwright/test';

test('optimize a valid image file', async ({ page }) => {
  await page.goto('https://picopic.io');
  await page.setInputFiles('input', 'tests/fixtures/valid.png');
  const result = page.locator('text=Size reduced 75 → 74 bytes');
  await expect(result).toBeVisible();
});

test('optimize an invalid image file', async ({ page }) => {
  await page.goto('https://picopic.io');
  await page.setInputFiles('input', 'tests/fixtures/invalid.png');
  const result = page.locator('text=Oops!');
  await expect(result).toBeVisible();
});
