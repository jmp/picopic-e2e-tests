import {test, expect} from '@playwright/test';

test('smoke', async ({ page }) => {
  await page.goto('https://picopic.io');
  const title = page.locator('h1');
  await expect(title).toHaveText('Picopic!');
});
