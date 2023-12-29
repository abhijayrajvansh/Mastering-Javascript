
// query selector
/*
selectors:
- html tag name
- id, using #
- class
*/
// - html tag name
const body = document.querySelector('body');
console.log(body)
// body.innerHTML = "<h1>Hacked!</h1>"
console.log(body)

// id, using #
const username = document.querySelector('#username');
console.log(username)
console.log(username.innerHTML)
username.innerHTML = "<h2>Rajvansh Technologies</h2>"
console.log(username.innerText)
username.innerText = 'Rajvansh Technologies'

// class
const ele1 = document.querySelector('div')
console.log(ele1)

console.log(ele1.parentElement.children)

const ele2 = document.querySelectorAll('.block')
console.log(ele2)

ele2.forEach((e) => {
console.log(e.innerHTML)
})