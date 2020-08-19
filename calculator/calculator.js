function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array1) {
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	return array1.reduce(reducer, 0);
}

function multiply (args) {
	let total = 1;
	args.forEach(element => {
		total *= element;
		
	});
	return total;
}

function power(a, b) {
	return a ** b;
}

function factorial(a) {
	let total = 1;
	if (a == 0) {
		return 1;
	} else {
		for (i = a; i > 0; i--) {
			total *= i;
		}
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}