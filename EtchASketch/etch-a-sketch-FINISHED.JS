// sellect elements on the page
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');

// setup canvas for drawing
const width = canvas.width;
const height = canvas.height;
const startWidth = Math.random() * width;
const startHeight = Math.random() * height;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath();
ctx.moveTo(startWidth, startHeight);
ctx.lineTo(startWidth, startHeight);
ctx.stroke();

//Draw function

//handler for keys

//clear / shake function

//listen for arrow keys
