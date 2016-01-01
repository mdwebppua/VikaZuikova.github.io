var x = +prompt('Введите число для возведения в степень');
var n = +prompt('Введите степень');

function pow(a,b) {

	var result = 1;

	for (var i = 0; i < b; i++) {
		result = result*a;
		}

	return result;

}

var newResult = pow(x,n);

console.log(newResult);