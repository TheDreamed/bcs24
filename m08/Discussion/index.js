/*
    Array
        - is a datastructure that is used to store a collection
        of values. It is a type of object that consists of a list
        of elements (items), which can be of any data type
        - simply list of data

        array literal = []

        array declaration:
            let/const myArray = [];
*/
const places = ["Puerto Princesa", "El Nido", "Japan", "Korea", "Siargao", "Kawasan", "Thailand"];

// log first item
console.log(places[0]);
// log last item
console.log(places[6]);
// log total number of items
console.log(places.length);

for (let i = 0; i < places.length; i++) {
  console.log(places[i]);
}

/*
	Mini-Activity - 15 minutes

	Create an Array with 7 items/elements; all strings
		- list seven ofthe places you eant to visit someday
	Log the first item in the console
	Log the last item in the console
	Log the total number of the items in the console
	Create a loop to log all the items in the console

	Screenshot the solution code-based and the result.
	First 1-10 submission without errors --> 100 points
	Second 11-20 submission without errors --> 90 points
	Third 21-30 submission without errors --> 85
	the rest without errors --> 80
	Late submission or submission with error --> 60
*/

/*
	Array
		- is a datastructure that is used to store a collection of values. It is a type of object that consists of a list of elements (items), which can be of any data type
		- simply list of data

		array literal = []

		array declaration:
			let/const myArray = [];
*/
let placesToVisit = ['Tokyo', 'Great Wall of China', 'Empire State Building', 'Disneyland', 'Hollywood', 'Tower of London']
console.log(`This is the first place to visit ${placesToVisit[0]}`);
console.log(`This is the last place to visit ${placesToVisit[placesToVisit.length-1]}`)
console.log(`the total number of places visited: ${placesToVisit.length}`)
for(let i = 0; i < placesToVisit.length; i++){
	console.log(placesToVisit[i])
};

// Array Manipulation
	// Re-assign the values/items in an array
placesToVisit[2] = 'Giza Sphinx';
// index is value that identifies the position of an element within an array or string. In JS it starts at 0
console.log(placesToVisit[2])
console.log(placesToVisit)
// to access an element by using its indez
placesToVisit[5] = 'Maldives'
console.log(placesToVisit[5])
console.log(placesToVisit)
console.log(placesToVisit[10])//undefined - because there is no element with index 10 in the array
placesToVisit[0] = 'San Pedro City'
// array length - using the length property
// length property returns the number of elements in an array
placesToVisit[placesToVisit.length-1] = 'Eiffel Tower'
console.log(placesToVisit)
console.log(placesToVisit[0])
console.log(placesToVisit[placesToVisit.length-1])

/*
	Array Manipulation
	1. Adding Elements
		- means added an element to an array using the 'push()' and 'unshift()'
			- push()
				- adds an element to the end of an array
			- unshift()
				- adds an element at the beginning of an array
	2. Removing Elements
		- removes an element to an array using 'pop()' and 'shift()'
			- pop()
				- removes an element at the end of an array
			- shift()
				- removes the first element of the an array
	3. Splicing Element
		- use splice() can removed or insert elements into an array
	4. Slicing Element
		- using the slice() a subarray can be extracted from an array
	5. Concatenating Element
		- adds two or more arrays using concat()

*/
let myBasket = ['apple', 'banana']
myBasket.push('cherry')//adds cherry at the end of the array
console.log(myBasket)

myBasket.unshift('orange')//adds orange at the beginning of the array
console.log(myBasket)

//myBasket = ['orange', 'apple', 'banana', 'cherry']
myBasket.pop();//removes cherry from the list
console.log(myBasket)

myBasket.shift()
console.log(myBasket)

let myFruitBasket = ['apple', 'banana', 'grapes', 'pear']
console.log(myFruitBasket)

myFruitBasket.splice(2, 1)//removes 1 item/element at index 2
console.log(myFruitBasket)

myFruitBasket.splice(1, 0, 'mango', 'orange')
console.log(myFruitBasket)
// inserts 'mango' and 'orange at index 1'
// 0 or the second parameter of the splice determines how many elements to remove/delete from the array starting at the specified index
// syntax: array.splice(start, [, deleteCount[item....])

let myFruitBasket1 = ['apple', 'banana', 'grapes', 'pear']
let subMyFruitBasket = myFruitBasket1.slice(1, 3)//extracts a subarray from 1(inclusive) to the index 3(exclusive)
console.log(subMyFruitBasket)//[banana, grapes]

let fruitBasket1 = ['kiwi', 'melon']
let fruitBasket2 = ['berries', 'chico']
let combineBasket = fruitBasket1.concat(fruitBasket2)
console.log(combineBasket)

// adding items in an array without using methods:
let array = [];
console.log(array[0])
array[0] = 'Cloud Strife'
console.log(array)
array[1] = 'Tiffa Lockhart'
console.log(array)

// How can I reliably add items at the end of the array without using methods
array[array.length-1] = 'Aerith Gainsborough'
console.log(array)

array[array.length] = 'Vincent Valentine'
console.log(array)

//mutators - these array methods usually change the original array

// sort() - by default, will allow us to sort our items in ascending order
array.sort()
console.log(array)

let numArray = [3, 2, 1, 6, 7, 9]
numArray.sort()
// sort() converts all items into strings and then arranges the items/elements accordingly as if they were words/text
console.log(numArray)

let numArray1 = [32, 400, 450, 2, 9, 5, 50, 90]
numArray1.sort()
// to be able to properly sort our number per value we have to add an additional function/anonymous function inside sort
console.log(numArray1)

// anonymous functions are function without names they cannot invoked or called and instead only works when used or given as argumant to another functions
// you can pass functions as arguments to other functions
//you can also pass anonymous functions into other functions

numArray1.sort(function(a,b){
	return a-b
})
console.log(numArray1)

// descending sort
numArray1.sort(function(a,b){
	return b-a
})
console.log(numArray1)


let arrayStr = ['Juan', 'Maria', 'Eleanor', 'Ibbara']
//sort() sorted item alphabetically
//reverse() reversed the order of the items

arrayStr.sort().reverse()
console.log(arrayStr)//strings ordered descendingly

// Non-mutators - are methods that will not change the origical
//Ex. Slice
