const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7f8899966fmshd1d5963c8fb7048p1a7c60jsn2fe2708adb76',
		'X-RapidAPI-Host': 'getrit-furniture-store.p.rapidapi.com'
	}
};

fetch('https://getrit-furniture-store.p.rapidapi.comhttps//getrit.com/API/Token?Token=Demo', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));