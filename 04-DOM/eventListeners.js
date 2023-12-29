const b1 = document.getElementById('script1');

// not preferred because it get overwritten
b1.onclick = () => { 
  // some task
  alert('task executed')
}

const b2 = document.getElementById('script2');
// more preffered way, because it won't get overwritten rather new function and this one both will get executed
b2.addEventListener('click', function () {
  // some more task
  alert('another task executed!')
})


changeColor = () => {
  const bodyElement = document.getElementById('wholeBody')
  // bodyElement.classList.add('textStyling') // this need to have a style tag and a class for the change but
  bodyElement.style.color = 'blue' // wow just link and style color change boom!
  alert('oops a new function chages to blue') // damn here alert works before the color chnages maybe the changes are possible once the function is finished
}

// create something that change name into red color!
document.getElementById('changeColortoRed').addEventListener('click', changeColor)
document.getElementById('changeColortoRed1').addEventListener('click', () => {
  const bossy = document.getElementById('wholeBody');

  if(bossy.style.color == 'blue') {
    bossy.style.color = 'green'
  }
  else {
    bossy.style.color = 'red'
  }
})

const b3 = document.getElementById('script3')
b3.addEventListener('click', () => {
  b3.remove()
})
