console.log('connected');
// document.addEventListener('load', function() {
// 	var elems = document.querySelectorAll('.sidenav');
// 	var instances = M.sidenav.init(elems, {});
// });

// function doSomething() {
// 	console.info('DOM loaded');
// }

// if (document.readyState === 'loading') {
// 	// Loading hasn't finished yet
// 	document.addEventListener('DOMContentLoaded', doSomething);
// } else {
// 	// `DOMContentLoaded` has already fired
// 	doSomething();
// }
$(document).ready(function() {
	$('.sidenav').sidenav();
});

const turtle = document.querySelector('.turt');
let x = 0;
let y = 0;
const speed = 50;
let flipped = false;
let rotate = 0;
function handleKeyDown(event) {
	// if its not an arrow key, we dont care
	if (!event.key.includes('Arrow')) {
		return;
	}
	switch (event.key) {
		case 'ArrowUp':
			y = y - 1;
			rotate = 90;
			break;
		case 'ArrowDown':
			y = y + 1;
			rotate = -90;
			break;
		case 'ArrowLeft':
			x = x - 1;
			rotate = 0;
			flipped = true;
			break;
		case 'ArrowRight':
			x = x + 1;
			rotate = 0;
			flipped = false;
			break;
		default:
			console.log('That is not a valid move');
			break;
	}

	turtle.setAttribute(
		'style',
		`
        --rotateX: ${flipped ? '0' : '180deg'};
        --x: ${x * speed}px;
        --y: ${y * speed}px;
        --rotate: ${rotate}deg;
      `
	);
}
window.addEventListener('keydown', handleKeyDown);
