// let getweather= async (city)=>{
// let weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=6fbb0a00375dab9c853e64c6fa141d22&units=metric';
// let weatherOBJ =  await fetch(weatherAPI);
// let response = weatherOBJ.json();
// return response;
// }

//  async function callweather(){
// getweather('tiruppur')
// .then((response)=>{
// console.log(response);
//  document.querySelector('.country').innerHTML=response['name'];
//   document.querySelector('.weather').innerHTML= response['weather'][0]['description'];
//    document.querySelector('.temperature').innerHTML=response['main']['temp'];
//   document.querySelector('.wind-speed ').innerHTML=response['wind']['speed'];
//   document.querySelector('.feels-like ').innerHTML=response['main']['feels_like'];

// })
// }
// callweather();


async function name(){
const url = 'https://openweather43.p.rapidapi.com/weather?appid=da0f9c8d90bde7e619c3ec47766a42f4&q=tiruppur&units=standard';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '38c4e42f8fmsh9b84ef94fd5f496p10f359jsn108057ba823e',
		'x-rapidapi-host': 'openweather43.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
name();