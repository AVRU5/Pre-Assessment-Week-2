/***********************************************************************
Write a function using fat arrow syntax, `sentenceMaker` that
takes in any number of arguments as strings, and create a sentence out
of it. You may assume that all arguments will be strings. Add an exclamation
mark at the end of the sentence.

Examples:

sentenceMaker('Hello', 'World'); // 'Hello World!'
sentenceMaker('I', 'love', 'coding'); // 'I love coding!'
sentenceMaker('The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'); // 'The quick brown fox jumps over the lazy dog!'
***********************************************************************/

// your code here
/* Understand:
	1. write a function using fat arrow syntax, it will accept a infinite amount of arguments.
	2. create a sentence out of the arguments, add an "!" to the end of the sentence.
   Plan:
    1. write a function using fat arrow syntax, use the reduce parameter syntax.
	2. create a for loop to iterate through the new arr
	3. return the arguments as string with an "!" at then end.
*/

let sentenceMaker = (...arg) =>
{

	for(let i = 0; i < arg.length; i++)
	{
		return arg.join(" ") + "!"
	}
};
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
	module.exports = sentenceMaker;
} catch (e) {
	module.exports = null;
}
