import { expect, test } from '@playwright/test';

test('トップページ', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.waitForLoadState('load');

  await expect(page).toHaveScreenshot({fullPage: true});
});

test('商品詳細', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.waitForLoadState('load');

  await page.getByRole('link', { name: '商品1 スーパージャンプクエスト ★★★★★ (6,619' }).click();
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('カート', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.waitForLoadState('load');

  await page.getByRole('banner').getByRole('link').nth(1).click();
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('購入手続き', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.waitForLoadState('load');

  await page.getByRole('banner').getByRole('link').nth(1).click();
  await page.getByRole('link', { name: '購入手続きへ' }).click();
  await expect(page).toHaveScreenshot({fullPage: true});

  await page.getByRole('button', { name: '購入を確定する' }).click();
  await expect(page).toHaveScreenshot({fullPage: true});

  await page.getByRole('textbox', { name: '例: 山田 太郎' }).fill('山田太郎');
  await page.getByRole('textbox', { name: '例: 東京都新宿区○○ 123-' }).fill('東京都');
  await page.locator('#payment').selectOption('クレジットカード');
  await page.getByRole('checkbox', { name: '利用規約に同意する' }).check();
  await page.getByRole('button', { name: '購入を確定する' }).click();
  await expect(page).toHaveScreenshot({fullPage: true});
});

test('マイページ', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.waitForLoadState('load');

  await page.getByRole('banner').getByRole('link').nth(2).click();
  await expect(page).toHaveScreenshot({fullPage: true});
});




