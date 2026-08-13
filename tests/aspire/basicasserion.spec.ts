import {test,expect} from '@playwright/test';
// Basic assertion is used to check the value of the variable or expression
test('Basic assertion', async ({}) => {
// below code is used to check the value of the variable a is greater than 9 or not
    const a = 10;
   await expect(a).toBeGreaterThan(9);


})
