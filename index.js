console.log('connected');
document.addEventListener('DOMContentLoaded', function() {
	console.log('dom content loaded');
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems, options);
	console.log('asdf');
});
