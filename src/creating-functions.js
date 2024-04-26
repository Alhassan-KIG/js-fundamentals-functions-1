// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
const incrementNumber = (i) =>{
  return ++i
}
let i = 30
console.log('incrementNumber', ++i)

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
const string = 'alhassan'
const capFirst = string.charAt(0).toUpperCase() + string.slice(1)
console.log(capFirst)



// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below
//let name = 'alhassan';
let smiley = string.charAt(0).toUpperCase() + string.slice(1)
console.log('Hi ' + smiley + ' :)!')


// 4. Define a function that takes an array of data and returns how many strings are in the array.
//
// Example Input and Output:
//
// Input                | Output
// ['edward']           | 1
// ['edward', 'aiyana'] | 2
// [1]                  | 0
// [1, 'edward']        | 1
//
// TODO: write code below
const Properties = [  'Sabako Group', 'KIG Forex', 'General Merch', 'Kololi Est', 'Salagi Est', 'Tujereng Est', 'Madiana Est', 'Tanji Est', 'Kartong Est', 'Jenungkunda Est', 'Farafenni Est']
const numProperties = Properties.length
console.log(numProperties)


// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
//
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}
//
// TODO: write code below
const nameRegister = []
nameRegister.push('Nuha')
nameRegister.push('Fatou Jallow')
nameRegister.push('Alhassan')
nameRegister.push('Alhagie B')
nameRegister.push('Amadou')
nameRegister.push('Sedat')

console.log(nameRegister)


// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: incrementNumber, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capFirst, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: smiley, // etc
  d: numProperties,
  e: nameRegister
}
