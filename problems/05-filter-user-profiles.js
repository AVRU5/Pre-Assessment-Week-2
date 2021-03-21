/***********************************************************************
Write a function named `filterUserProfiles` that accepts an array of
objects that represent user profiles and a callback function. You
can expect the callback function to take in an object and return
true or false.

`filterUserProfiles` should use the callback function to return an
array of names from the user profiles that, when passed into the
callback function, return true. You can expect all user profiles to
be passed in with a key of "name".

const facebookUsers = [
  { name: "John", age: "21", state: "Florida" },
  { name: "Mary", age: "57", state: "California" },
  { name: "Judy", age: "47", state: "Texas" },
  { name: "Mike", age: "32", state: "New York" }
];

filterUserProfiles(facebookUsers, (user) => user.age > 30); // ["Mary", "Judy", "Mike"]
filterUserProfiles(facebookUsers, (user) => user.state === "New York"); // ["Mike"]
***********************************************************************/
/* Understand:
    1. write a function called "filterUserProfiles" that accepts an arr and a cb as arguments.
    2. the cb function will take in the arr's obj and return true or false for the obj.
    3. the function should use the cb to return an arr of names when passed into the cb function, return true.
    4. all user profiles will pass in with the key of "name".
   Plan:
    1. write the function "filterUserProfiles" with the arg (arr, cb).
*/
// your code here
let filterUserProfiles = (arr, cb) =>
{
  let newArr = [];
  for(let i = 0; i < arr.length; i++)
  {
    let el = arr[i]
    if (cb(el) === true)
    {
      newArr.push(el.name)
    }
  }
  return newArr;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = filterUserProfiles;
} catch (e) {
  module.exports = null;
}
