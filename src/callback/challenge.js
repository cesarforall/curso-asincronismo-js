const XMLHttprequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.com/api/v1';

function fetchData(urlApi, callback) {
	let xhttp = new XMLHttprequest();
	xhttp.open('GET', urlApi, true);
	xhttp.onreadystatechange = function (event) {
		if (xhttp.readyState === 4) {
			// El estado '4' indica que ha terminado el proceso
			if (xhttp.status === 200) {
				callback(null, JSON.parse(xhttp.responseText));
			} else {
				const error = new Error('Error' + urlApi);
				return callback(error, null);
			}
		}
	};
	xhttp.send();
}
