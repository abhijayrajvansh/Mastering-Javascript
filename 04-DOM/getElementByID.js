const e1 = document.getElementById('username');
console.log(e1)
e1.innerText = 'Rajvansh Technologies!' // direct method

// injecting red-color class css style in that ID using JS
e1.classList.add('red-color', 'underline')
// instead .add you can use .remove('class-name') to remove that style effect