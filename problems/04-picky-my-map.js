/***********************************************************************
Write a function `pickyMyMap` that accepts an array and a callback as
arguments. The function should call the callback for each element of the
array, passing in the element and return a new array of the results of
each call to the callback function. If the result of the callback function
returns something falsey, then do not add it in the result array.

const nums = [1, 2, 3, 4];
pickyMyMap(nums, (num) => num - 2); // [-1, 1, 2]

const booleans = [true, false, true, false, true];
pickyMyMap(booleans, (boolean) => !boolean); // [true, true]

You may not use Array's `map()`, `filter()`, or `forEach()` methods.
***********************************************************************/
/* Understand:
	1. Write a function "pickyMyMap" that accepts an arr and a cb as args.
	2. Function needs to call the call back for each arr[el], passing the in the el and return new arr.
	3. If the results return something falsey, then do not add to the result arr.
   Plan:
    1. Write the function "pickyMyMap" with the arg (arr, cb)
	2. create a empty arr.
	3. create a for each loop, that calls the cb for each el.
	4. then create a if statement that states that if the cb of the el is not true then do not push into new arr.
	5. return the new arr.
*/

let pickyMyMap = (arr, cb) =>
{
	let newArr = [];
	for (let i = 0; i < arr.length; i++)
	{
		let el = arr[i];
		if (cb(el)) // if 0, null, and false it will return as false w/this type of if statement.
		{
			newArr.push(cb(el));
		}
	}
	return newArr;
};


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
	module.exports = pickyMyMap;
} catch (e) {
	module.exports = null;
}
