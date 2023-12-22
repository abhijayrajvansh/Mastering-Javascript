function square (n) {
  return n * n
}

function cube (n) {
  return n * n * n
}

function sumOfSquare(a, b) {
  let val1 = square(a)
  let val2 = square(b)

  return val1 + val2
}

function sumOfCube(a, b) {
  let val1 = cube(a)
  let val2 = cube(b)

  return val1 + val2
}
console.log(sumOfSquare(1, 2))

// let val1 = cube(a)
// let val2 = cube(b)
// return val1 + val2

// all these are repeated steps in sumOfSquare and sumOfCube so instead of creating we just tell a function which function to execute

function sumOfSomething(a, b, callBackFunction) {
  let val1 = callBackFunction(a)
  let val2 = callBackFunction(b)

  return val1 + val2
}

console.log(sumOfSomething(1, 2, cube))