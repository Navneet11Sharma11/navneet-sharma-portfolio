import { expect, test } from '@playwright/test';

test('renders the portfolio sections', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Navneet Sharma/);
  await expect(page.getByRole('heading', { name: 'Navneet Sharma' })).toBeVisible();

  for (const section of ['hero', 'about', 'skills', 'experience', 'education', 'contact']) {
    await expect(page.locator(`#${section}`)).toBeAttached();
  }
});

test('desktop navigation follows section links', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Skills' }).click();

  await expect(page).toHaveURL(/#skills$/);
  await expect(page.locator('#skills')).toBeAttached();
});

test('mobile navigation opens and follows section links', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  await page.getByRole('button', { name: 'Open navigation menu' }).click();
  await page.getByRole('link', { name: 'Experience' }).click();

  await expect(page).toHaveURL(/#experience$/);
  await expect(page.getByRole('button', { name: 'Open navigation menu' })).toBeVisible();
});
