/* 
VARIABLE SCIENCE
Javascript is a dynamically typed language. 
we don't need to tell beforehand the datatype for a variable.
Reassigning of the data-type is possible. Below is an example
*/
red_flag = 25;
red_flag = 'Sarthak';
RED_FLAG = 25; 

// case-sensitive, both are different variables.
console.log(red_flag);
console.log(RED_FLAG);

// only letters, numbers, _ and $ in variable name
// also only letters, _ and $ as first char in variable name, no numbers
$dollar_0is$green_FLAG = 'money'

// null vs undefined
null_variable = null; // we know what's here, but it's empty.
undefined_variable = undefined; // we don't even know what's here.

/* 
VARIABLE CASES
camelCase (mostly-used)
snake_case
kebab-case
PascalCase
*/

// Variable Declaration
// var: not be used after es6 (after 2015)
// since thousands of variables are used in working code
var address = 'Mumbai'

// let: by default if any variable is declared using let, 
// but not initialized
// then it is undefined.
let a;
console.log(a);

// const: always needs to be initialized, 
// line below will give error
// const b;
const b = 10;

// code blocks to reuse variable names
{
    let p = 5;
    console.log(a);
}

{
    let p = 10;
    console.log(a);
}
