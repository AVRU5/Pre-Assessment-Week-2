/***********************************************************************
Write a function `keyAdderUniqueVal(object, key, value)` that accepts an
object, a string to be set as a key in that object, and a value. When invoked
the function should assign the key and value arguments as a key value pair in
the object argument ONLY IF the value is not already a value for a different
key in the object. Return the mutated object.

See below for examples

let cat = { name: 'Willie', color: 'orange' };
keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }
***********************************************************************/


/* Understand:
	1. write a function that accepts an object, key and value as parameters. the key and value should pair together in the object.
	2. when function is invoked the funciton should immediately assign the key and value arguement as a key pair, but only if not already in object.
	3. once completed, return the mutated object.
   Plan:
    1. create the function keyAdderUniqueVal with the parameters (object, key, value).
	2. assign a variable that will pull the values of an object, essentially creating an array of all the values.
	3. create an if statement that say if the argument value is not included into the values array (from step 2),
	   then assign the key argument into the object with the value arguement as the new value for that key.

*/
function keyAdderUniqueVal(object, key, value)
{
	let values = Object.values(object); //Object.keys()
	if(!values.includes(value))
	{
		object[key] = value;
	}
	return object;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyAdderUniqueVal;
