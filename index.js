console.log('connected');
document.addEventListener('load', function() {
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.sidenav.init(elems, {});
});

function doSomething() {
	console.info('DOM loaded');
}

if (document.readyState === 'loading') {
	// Loading hasn't finished yet
	document.addEventListener('DOMContentLoaded', doSomething);
} else {
	// `DOMContentLoaded` has already fired
	doSomething();
}
