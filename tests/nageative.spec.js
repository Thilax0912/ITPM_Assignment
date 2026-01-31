const { test, expect } = require('@playwright/test');

test('Neg_Fun_0001 - Organization name gets undesirably transliterated', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type(' 5 kg sugar venum. ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain(' 5 kg ');
  
  expect(value).toContain(' ௫ ');
  expect(value).toContain(' கஃ ');
});

test('Neg_Fun_0002 - Time token with separated suffix breaks', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page.locator('textarea').nth(1);

  await inputBox.fill('7:15pm ku varen.');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain(' 7:15pmக்கு  ');

  expect(value).toContain('பம்');

});


test('Neg_Fun_0003 - Organization name gets undesirably transliterated', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type(' 5 kg sugar venum. ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain(' 5 kg ');
  
  expect(value).toContain(' ௫ ');
  expect(value).toContain(' கஃ ');
});