// import test, {page,expect} from '@playwright/test'

// test('Verify user is able to sign up successfully', async({page})=>{
     
//     await page.goto('https://release.mightyjaxx.com/register');
//     await page.pause();

//     await page.locator('input[name="firstName"]').fill('Quang');
//     await page.locator('input[name="lastName"]').fill('Nguyen');

//     await page.locator('input[name="email"]').fill('Quangnguyen123@gmail.com');
//     await page.locator('input[name="password"]').fill('Mk123456@');
//     await page.locator('input[name="confirmPassword"]').fill('Mk123456@');

//     await page.locator('div').filter({ hasText: /^I accept the Terms of Service and Privacy Policy$/ }).locator('rect').check();
//     await page.click('button', { hasText: 'Create' });
//     await page.pause();
//     await expect(page).toHaveURL('https://release.mightyjaxx.com/');
//     await page.pause();





// });
// import test, { expect } from '@playwright/test';

// test('Verify user is able to sign up successfully', async ({ page }) => {
//   // Truy cập trang đăng ký
//   await page.goto('https://release.mightyjaxx.com/register');
//   await page.pause()

//   // Điền thông tin vào form đăng ký
//   const form = page.locator('form');
//   await form.locator('input[name="firstName"]').fill('Quang');
//   await form.locator('input[name="lastName"]').fill('Nguyen');
//   await form.locator('input.sc-9e70de67-3.kjLsms[name="email"]').fill('Quangnguyen123@gmail.com');

//   await form.locator('input[name="password"]').fill('Mk123456@');
//   await form.locator('input[name="confirmPassword"]').fill('Mk123456@');

//   // Check điều khoản sử dụng
//   await form
//     .locator('div')
//     .filter({ hasText: 'I accept the Terms of Service and Privacy Policy' })
//     .locator('input[type="checkbox"]')
//     .check();
//     await page.locator('div').filter({ hasText: /^I accept the Terms of Service and Privacy Policy$/ }).locator('rect').check();
//   // Click nút "Create"
//   await form.getByRole('button', { name: 'Create' }).click();

//   // Kiểm tra URL sau khi tạo tài khoản
//   await expect(page).toHaveURL('https://release.mightyjaxx.com/');

//   await page.pause();
// });


import test, { expect } from '@playwright/test';

test('Verify user is able to sign up successfully', async ({ page }) => {
  // Truy cập trang đăng ký
  await page.goto('https://release.mightyjaxx.com/register');
  await page.pause();

  // Điền thông tin vào form đăng ký
  const form = page.locator('form');
  await form.locator('input[name="firstName"]').fill('Quang');
  await form.locator('input[name="lastName"]').fill('Nguyen');
  await form.locator('input.sc-9e70de67-3.kjLsms[name="email"]').fill('Quangnguyen123@gmail.com');
  await form.locator('input[name="password"]').fill('Mk123456@');
  await form.locator('input[name="confirmPassword"]').fill('Mk123456@');

  // Click checkbox sử dụng SVG
 
//   await form.locator('input.sc-b9e71a0b-0.dEtpLv').click();

const checkbox = form.locator('svg.sc-b9e71a0b-0.dEtpLv').locator('..').locator('input[type="checkbox"]');
  
// Kiểm tra checkbox có thể được click
await expect(checkbox).toBeVisible();

// Click vào checkbox
await checkbox.click();
  // Click nút "Create"
  await form.locator()

  // Kiểm tra URL sau khi tạo tài khoản
  await expect(page).toHaveURL('https://release.mightyjaxx.com/');

  await page.pause();
});

