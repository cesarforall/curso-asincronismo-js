// Las promesas tienen 3 estados
// 1. Pendiente
// 2. Cumplido
// 3. Rechazado

const promise = new Promise(function (resolve, reject) {
	resolve('Resolved');
});

const cows = 9;

const countCows = new Promise(function (resolve, reject) {
	if (cows > 10) {
		resolve(`We have ${cows} cows on the farm`);
	} else {
		reject('There is no cows on the farm');
	}
});

countCows
	.then(result => {
		console.log(result);
	})
	.catch(error => {
		console.error(error);
	})
	.finally(() => {
		console.log('Finally');
	});

export function delay(time, message) {
	return new Promise((resolve, reject) => {
		resolve(() => {
			setTimeout(console.log(message), time);
		});
	});
}

// Challenge

function delay(time, message) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(message);
		}, time);
	});
}

delay(2000, 'Hello aftes 2s').then(result => console.log(result));
