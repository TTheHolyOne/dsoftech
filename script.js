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

function back() {
	cracking.style.display = 'none';
	hacking.style.display = 'none';
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