// Repetition Structure
/*
    Loops are one of the most important feature that a programming language must have
        - while loop
            - a while takes a single condition.
            If the condition evaluates true, the code inside the block will run
            - syntax:
                while(condition){
                    code block
                }
        - do while
            - This type of loop works alike like while loop but unlike
            while loops, do - while loops guarantee that the code will be executed at least once
            - syntax:
                    do{
                        code block
                    }while(condition)
        - for loop
        - for loop is more flexible than the while and do-while. It consists of three parts:
                - Initialization:
                    - creating variable which will be used as the counter
                    - the initial value that will track the progression of the loop
                - Condition:
                    - the condition that will evaluated and will determine whether the loop will run one more time and
                - finalExpression or (decrementation)
                    - the iteration that indicates how to advance the loop
            - syntax:
                    for(initial value; condition; iteration)
*/
// While Loop - allows us to repeat an action or an instruction as the condition is true

/* while(true){
    console.log('This will result in an infinite loop')
}

Always make sure that at the very least your loop condition will
be terminated or will be false at one point
*/

let x = 1
while ( x <= 5){
    console.log(x);
    x++;
};

/*
    do-while loop
    the do{...} executes the code first. After it finishes the execution, the while statement
    will evaluate whether the do {...} should be executed
    */

let number = Number(prompt('Give me a number: '));
do{
    console.log(`Do while ${number}`);
    number += 1
}while(number < 10)

let doWhileCount = 1;

do {
    console.log(doWhileCount);
} while (doWhileCount ===0) /*{
    console.log(doWhileCount)
    doWhileCount--;
}*/

/*Mini-Activity

    Create a do while loop that ask the user to enter a number
    between 1 and 10 using the do while loop

*/
/*
let num = 0;

do {
  num = parseInt(prompt("Enter a number between 1 and 10:"));
} while (num < 1 || num > 10);
console.log(`You've entered: ${num}`);
*/
// for loop
for(let count = 0; count <= 10; count++){
    console.log(count);
};
/*
    Accessing Array Items
        - each item in array is ordered accordingly
        - each item is ordered per index
        - each array starts their index at 0
*/
let fruits = ['apple', 'banana', 'cherry', 'pineapple', 'kiwi']
// We can access the items in an array by accessing them through their index
// This will allow us to see the 3rd item in our array
console.log(fruits[2])
// access the 2nd item
console.log(fruits[1])

// .length property is also a property of an array
// The length in array shows all the items in array
for (let i=0; i < fruits.length; i++){
    console.log(fruits[1])
}
// length property to show the total number of items in an array
console.log(fruits.length)//5 total number of item in array

// a more reliable way of checking the last item in an array
// arrayName[arrayName.length-1]
console.log(fruits[fruits.length-1])//kiwi

/*
    Mini-Activity
    Create an JavaScript program that ask for user for an input,
    verifies that it is a number and uses for loop to calculate the sum of the elements in the array.
*/

// gloal/local scope
// globa scoped variables are variables that can be accessed inside or outside a function or anywhere else in our script
let userName = 'super_knight_1000'

function sample(){
    // local scoped or function scope variable
    let heroName = 'Anpanman'
    console.log(heroName)
}
sample();
console.log(userName)
console.log(heroName)
// local scoped variab;e cannot be accessed outside the function it was created from
// console.log(herName)

// Strings are similar to Arrays
// Strings are special compared to othe data types
// (bool, num) in taht it has ccess to function and property that some data type do not have
// Some array methosfunctions even work with String

let powerPuffGirls = ['Blosson', 'Bubbles', 'Buttercup']
console.log(powerPuffGirls[1])
// you can access every characte in a string as you would in an array
let name = 'Song Joongki'
console.log(name[1])
console.log(name[name.length-1])
