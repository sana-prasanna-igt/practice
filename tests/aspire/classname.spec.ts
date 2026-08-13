import { test, expect } from '@playwright/test';

test('getbyplaceholder', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Use the correct CSS selector for elements with two class names
  //if the class name have space in between the element you can use . to select the element with both class names. For example, if you have a class name like "input_error form_input", you can use the selector ".input_error.form_input" to select the element with both class names. and you need to have . at the beginning of the selector to indicate that you are selecting a class name. and if you have id for the element you can use #idname to select the element with the id name. and you can combine both class name and id name to select the element with both class name and id name. For example, if you have a class name like "input_error form_input" and an id name like "user-name", you can use the selector ".input_error.form_input#user-name" to select the element with both class name and id name.
  //we can't use getbyplaceholder and getbyrole for the element with two class names because getbyplaceholder is used to get the element by placeholder attribute of the web element and it will not work for the element with two class names. so we need to use fill() method to fill the input field with the value. and we can use click() method to click on the button. and we can use expect() method to verify the URL after login.
 //only the xpath,css, id, class name, name, tag name, link text, partial link text, and the attribute of the web element can be used to locate the element with two class names. and we can use fill() method to fill the input field with the value. and we can use click() method to click on the button. and we can use expect() method to verify the URL after login.
  await page.fill('.input_error.form_input#user-name', 'standard_user');
  // if you have similar class names for password field, you can use the same approach mention the correct selector for password field ex: #password or .input_error.form_input#password
  await page.fill('.input_error.form_input#password', 'secret_sauce');
  // if you have similar class names for login button, you can use the same approach mention the correct selector for login button ex: #login-button or .btn_action.btn_medium.login-button

  await page.click('#login-button');

// the below assertion is used to verify that the user has successfully logged in and redirected to the inventory page. The URL of the inventory page is expected to contain the string "inventory.html". The assertion will pass if the current URL matches this expectation, indicating that the login was successful and the user is on the correct page.
  await expect(page).toHaveURL(/inventory.html/);
});