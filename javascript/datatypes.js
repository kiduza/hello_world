// primitive (7) - 
// number, string, boolean, undefined, null, bigint, symbol
let age = 24;
typeof(age);

let x = null;
typeof(x); // it will return object

// non-primitve (objects)
// when we want to save a lot of info together
// arrays, functions etc. 

const student = {
    // key:value pairs
    fullName: 'Tom Marvolo Riddle',
    age: 20,
    cgpa: 9.2,
    isPass: true,
};

// different ways to print the values of keys
console.log(student['age']); //use quotes
console.log(student.age); // quotes not needed

// updating values in object
// in const object, we can change in the keys of that object.
student.age = student.age + 1;
console.log(student.age);