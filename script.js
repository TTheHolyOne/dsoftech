const password = '010101';
work = document.getElementById('work');
main = document.getElementById('main');
wrong = document.getElementById('wrong');
hacking = document.getElementById('hacking');
cracking = document.getElementById('cracking');
types = document.getElementById('types');

function hackingg() {
	hacking.style.display = 'block';
	types.style.display = 'none'
}

function crackingg() {
	cracking.style.display = 'block';
	types.style.display = 'none'
}
function programmingg() {
	programming.style.display = 'block';
	types.style.display = 'none'
}
function ddosingg() {
	ddosing.style.display = 'block';
	types.style.display = 'none'
}
function doxingg() {
	doxing.style.display = 'block';
	types.style.display = 'none'
}
function back() {
	cracking.style.display = 'none';
	hacking.style.display = 'none';
	doxing.style.display = 'none';
	ddosing.style.display = 'none';
	programming.style.display = 'none';
	abouthacking.style.display = 'none';
	aboutcracking.style.display = 'none';
	aboutdoxing.style.display = 'none';
	aboutddosing.style.display = 'none';
	aboutprogramming.style.display = 'none';
	types.style.display = 'block';
	return false;
}

function getVal() {
	const val = document.getElementById('text').value;
	console.log(val);
	if (val == password) {
		work.style.display = "block";
		main.style.display = "none";
	} else {
		main.style.display = "none";
		wrong.style.display = "block";
	}
}
function restart() {
	main.style.display = "block"
	wrong.style.display = 'none'
	work.style.display = 'none'
}
function start() {
	work.style.display = "none"
	types.style.display = 'block'
}