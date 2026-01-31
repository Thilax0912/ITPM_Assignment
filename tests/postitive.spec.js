const { test, expect } = require('@playwright/test');
/*
test('Pos_Fun_0001 - daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type(' vanakkam! ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain(' vanakkam! ');
}); 
test('Pos_Fun_0002 - daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type(' naan  Thilax  ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain(' naan  Thilax  ');
});


test('Pos_Fun_0003 - daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type(' konjam help pannunga? ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain(' konjam help pannunga? ');
});

test('Pos_Fun_0004 - daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type(' naan padikkiren. ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain(' naan padikkiren. ');
});

test('Pos_Fun_0005 - daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type(' naa netru poitten. ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain(' naa netru poitten. ');
});

test('Pos_Fun_0006 - daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type(' naalai classku poren. ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain(' naalai classku poren. ');
});
test('Pos_Fun_0007 - daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type(' inga vaa. ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain(' inga vaa. ');
});


test('Pos_Fun_0008 - daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type(' inga vaanga. ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain(' inga vaanga. ');
});
test('Pos_Fun_0009 - daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type(' nee ready-aa? ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain(' nee ready-aa? ');
});
test('Pos_Fun_00010 - daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type(' nee nerathukku vandha, naan start pannuren. ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain(' nee nerathukku vandha, naan start pannuren. ');
});


test('Pos_Fun_00011 - daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type(' enakku 2 ticket venum. ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain(' enakku 2 ticket venum. ');
});
test('Pos_Fun_00012 - daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type(' tamizh romba azhagu. ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain(' tamizh romba azhagu. ');
});
test('Pos_Fun_00013 - daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type(' vellai sattai nalla irukku. ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain(' vellai sattai nalla irukku. ');
});
test('Pos_Fun_00014 - daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type('sorry da, thappu aaiduchu.');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain(' sorry da, thappu aaiduchu. ');
});
test('Pos_Fun_00015 - daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type(' hello, nee enakku call panninaaya? ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain(' hello, nee enakku call panninaaya?');
});
test('Pos_Fun_00016 - daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type(' enna nadandhuchu?' );
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain(' enna nadandhuchu? ');
});
test('Pos_Fun_00017 - daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type(' ippo varaathe. ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain(' ippo varaathe. ');
});
test('Pos_Fun_00018 - daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type(' innaikku sema happy 😊 naan pass aagitten! ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain(' innaikku sema happy 😊 naan pass aagitten! ');
});

test('Pos_Fun_00019 - daily greeting phrase', async ({ page }) => {

  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type(' naan veetukku poitten. appuram saapiten. apram thoonginen. ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();

  expect(value).not.toContain(' naan veetukku poitten. appuram saapiten. apram thoonginen. ');

  });

test('Pos_Fun_00020 - daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type(' neenga sapteengala? ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain(' neenga sapteengala? ');
});
test('Pos_Fun_00021 - daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type(' passward strong-aa irukkanum; illaina login fail aagum. ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain(' passward strong-aa irukkanum; illaina login fail aagum. ');
});
test('Pos_Fun_00022 - daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type(' machan, innaikku cafe la meet pannalama? naan already busla irukken. google map open panni route anuppu. coffee konjam late aagalam, but wait pannunga. vandha udane message pannuren. ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain(' machan, innaikku cafe la meet pannalama? naan already busla irukken. google map open panni route anuppu. coffee konjam late aagalam, but wait pannunga. vandha udane message pannuren. ');
}); 

test('Pos_Fun_00023 - daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('textarea').first();
  await inputBox.type(' ennaku rupees venum. ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain(' ennaku rupees venum. ');
}); 


*/