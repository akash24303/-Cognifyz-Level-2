// Task 4: Change background color on button click
const button = document.getElementById('colorBtn');
const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'];

button.addEventListener('click', function() {
  // Random color pick karo
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});