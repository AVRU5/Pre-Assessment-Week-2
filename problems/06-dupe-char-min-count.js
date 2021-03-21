/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/
/* Understand:
	1. Write a function that takes in a string and num as arguments. (string, minCount)
	2. Function will then return an array of characters that show up ass many times as minCount.
	3. The String will have at least 1 character.
   Plan:
    1.
*/
function duplicateCharMinCount(string, minCount)
{

	let stringCounter = {};
	let res = [];

	// count up how many times each character shows up from the string parameter
	for(let i = 0; i < string.length; i++)
	{
		let current_letter = string[i]
		if(stringCounter[current_letter])
		{
			stringCounter[current_letter] += 1;
		}
		else
		{
			stringCounter[current_letter] = 1;
		}
	}

	for(letter in stringCounter)
	{
		if(stringCounter[letter] >= minCount)
		{
			res.push(letter)
		}
	}
	return res;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
