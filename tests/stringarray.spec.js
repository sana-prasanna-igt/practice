// below code is used to create an array of weekdays and print the values of the array using for loop and forEach loop

const weekdays= ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//retrival of array elements using for loop
for (const day  of weekdays)
{
    console.log('value of array::', day);
}

//retrival of array elements using forEach loop
console.log('--------for loop ----------');
weekdays.forEach((val, index) => {
   //
    console.log('value of array::', val);
});
console.log('--------forEach loop ----------');

