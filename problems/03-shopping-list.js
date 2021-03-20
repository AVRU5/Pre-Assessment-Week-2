/***********************************************************************
Write a function called `shoppingList(list)`. The shoppingList function will
take in a starting list as an array and return a new function that will allow
us to add to the list. When that return function is invoked with an
argument, it will add the argument to the list and return the list.


Look below to see how this function is invoked:

const groceryList = ['eggs']
const addToGroceryList = shoppingList(groceryList); // returns a function
addToGroceryList('maple syrup'); // returns ['eggs', 'maple syrup']

const clothesList = []
const addToClothesList = shoppingList(clothesList);
addToClothesList('tshirt'); // returns ['tshirt']
addToClothesList('pants'); // returns ['tshirt', 'pants']
console.log(clothesList); // ['tshirt', 'pants']

***********************************************************************/
/* Understand:
    1. write a function "shoppingList" that accepts a arr as an arg(list).
    2. the function will then return a new function that will add to the initial function arg(list)
    3. when the new funciton is invoked it will return the initial list with the new items.
   Plan:
    1. create a function with the arg as list.
    2. inside the function return a function with the arg (items).
    3. inside the new function push the arg (items) into the shoppingList arg (list)
    4. return the list.
*/

function shoppingList(list)
{
  return function(items)
  {
    list.push(items)
    return list;
  }
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = shoppingList;
