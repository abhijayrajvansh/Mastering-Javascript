const arr = ['abhijay', 'learning', 'software', 'engineering', 'javascript']

// for loop

for (let i = 0; i < arr.length; i++){
  console.log(arr[i])
}

function print(n){
  console.log(n)
}

// Array.forEach() - works like a for loop
arr.forEach((val) => {console.log(val)}) // this is high order fn and () => {} a call back function was fired

// Array.map() VS Array.forEach()

const number = [1, 2, 3, 4, 5]

const newArr = number.forEach(num => console.log(num * 2)) // that's only printing..
console.log(newArr) // undefined

const doubleArr = []

number.forEach(num => doubleArr.push(num * 2)) // this works but there's another way 👍🏼

function double (n){
  return n * 2
}

let newArray = number.map(val => val * 2) // does the job as well ⭐️

console.log(newArray)

// sum more functions

const animals = ['lion', 'cat', 'dog', 'wolf']

let check1 = animals.find(value => value == 'cat') // returns the same value if present
console.log(check1) 

let check2 = animals.indexOf('wolf') // yes, this returns the index, -1 if not present
console.log(check2)

let check3 = animals.findIndex((val) => val == 'wolf') // another way of finding index
console.log(check3)

let check4 = animals.includes('human') // return boolean value according to presence
console.log(check4)

const data = [0, 1, 2, 3, 4, 5, 6, 7]

const filteredData = data.filter(num => num % 2 == 0) // call back fn and then condition
console.log(filteredData)


let reqValue = data.slice(1, 4) // .slice(a, b) a-> inclusive and b -> exclusive .slice(0) return all the element from 0th index
console.log(reqValue)

let anotherArr = data.splice(1, 4) // remove the elements .splice is okay with indexing
console.log(anotherArr)

console.log(data)
