const { test, expect } = require('@playwright/test');

// This is a test file for for loop implementation in javascript

//below code is used to run a for loop for 10 iterations and validate the values
test('forloop runs 10 iterations', async () => {
  const values = [];
  let i = 10;
  while (i > 0) {
    values.push(i);
    i--;
  }
// below code is used to validate the values of the array after running the for loop
  expect(values.length).toBe(10);
  // below code is used to validate the first and last values of the array after running the for loop
  expect(values[0]).toBe(10);
  // below code is used to validate the last value of the array after running the for loop
  expect(values[values.length - 1]).toBe(1);
});
