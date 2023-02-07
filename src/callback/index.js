// Un callback es una función que se pasa como argumento de otra función

function sum(num1, num2) {
	console.log('Soy el log de sum');
    console.log(num1 + 3)
	return num1 + num2;
}

function calc(num1, num2, callback) {
    console.log('Soy el log de calc')
    console.log(callback(num1, num2))
	return callback(num1, num2);
}
debugger;
console.log(calc(2, 2, sum));

setTimeout(() => {
	console.log('Soy el log dentro de setTimeout');
}, 500);

function sayHello(name) {
	console.log(`Hello ${name}, soy el log de sayHello`);
}

setTimeout(sayHello, 2000, 'César'); 
