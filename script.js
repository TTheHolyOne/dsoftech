const password = '010101';
work = document.getElementById('work');
main = document.getElementById('main');
wrong = document.getElementById('wrong');


function getVal() {
  const val = document.getElementById('text').value;
  console.log(val);
	if (val == password){
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