const asyncFn = function (params) {
	return new Promise((resolve, reject) => {
		true
			? setTimeout(() => {
					resolve('Async');
			  }, 2000)
			: reject(new Error('Error'));
	});
};

const anotherFunction = async () => {
	const something = await asyncFn();
	console.log(something);
	console.log('Hello');
};

console.log('Before');
anotherFunction();
console.log('After');

// Challenge
async function runCode(url) {
	const options = {
	  method: "GET"
	}
  
	try {
	  new URL(url)
	} catch (error) {
	  throw new Error('Invalid URL');
	}
  
	try {
	  const response = await fetch(url, options);
	  const data = await response.json();
	  console.log(data);
	  return data
	} catch (error) {
	  throw new Error('Something was wrong');
	}
  }
  runCode('https://api.escuelajs.co/api/v1/categories')