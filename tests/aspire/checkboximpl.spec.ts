// test is the name of the library which we can import from the playwright library

import { test, expect } from '@playwright/test';

test('checkbox validation', async ({ page }) => {
  // Navigate using the built-in `page` fixture instead of launching a browser manually
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
// below code is used to get the checkboxes using xpath and store them in an array
// we have different function $ is used ti get the first web element using xpath and $$ is used to get all the web elements using xpath
//to get the xpath of the checkboxes we can use the inspect element and copy the xpath of the checkboxes
  const values=await page.$$('//*[@id="checkboxes"]/input');



  // using the array values we can iterate through the checkboxes and check if they are checked or not using isChecked() method
  for ( const ele of values )
  {
    // below code is used to check if the checkbox is checked or not using isChecked() method
    // isChecked() method returns a boolean value true if the checkbox is checked and false if the checkbox is not checked
    // if it is not checked then we can check the checkbox using check() method
    //it will take first element of the array and check if it not checked then it will check the checkbox and then it will take the second element of the array and check if it not checked then it will check the checkbox
    const condition=await ele.isChecked();
    if(!condition)
    {
    await ele.check();
    }
  }
await page.waitForTimeout(5000);
});