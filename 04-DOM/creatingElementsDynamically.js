const button = document.getElementById('button1');
const container = document.getElementById('container');

button.addEventListener('click', () => {
  const theName = document.createElement('H3')
  theName.innerText = ('Rajvansh Techbologies!')
  container.appendChild(theName)
})