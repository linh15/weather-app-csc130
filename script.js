function getData() {
	let baseURL = "https://api.weatherbit.io/v2.0/current?";
  let key = "f05c82d3df934ffc93d38ec2e8fc0674";

}

let data = {
 	count: 1,
  	data: [{
  		app_temp: 24.25,
  		aqi: 45,
		city_name: "Raleigh",
		clouds: 75,
		country_code: "US",
		datetime: "2017-08-28:17",
		dewpt: 15.65,
		dhi: 120,
		dni: 500,
		elev_angle: 63,
		ghi: 444.4,
		h_angle: 0,
		lat: "35.7721",
		lon: "-78.63861",
		ob_time: "2017-08-28 16:45",
		pod: "d",
		precip: 0,
		pres: 1006.6,
		rh: 59,
		slp: 1022.2,
		snow: 0,
		solar_rad: 350,
		state_code: "NC",
		station: "CMVN7",
		sunrise: "10:44",
		sunset: "23:47",
		temp: 24.19,
		timezone: "America/New_York",
		ts: 1503936000,
		uv: 2,
		vis: 10,
		weather: {
   	 		code: 801,
    		description: "Few clouds",
    		icon: "c02d"
  		},
  		wind_cdir: "NE",
  		wind_cdir_full: "northeast",
  		wind_dir: 50,
  		wind_spd: 6.17
	}]
};




$("#raw").html(JSON.stringify(data));
let obj = data.data[0];
$("#city").html(obj.city_name);
$("#temperature").html(obj.temp);

let weatherObj = obj.weather;
console.log(weatherObj);
$("#description").html(weatherObj.description);

let baseImgURL = "https://www.weatherbit.io/static/img/icons/";
let icon = weatherObj.icon;
let imgURL = baseImgURL + icon + ".png";
$("#imgIcon").attr("src", imgURL);

let code = weatherObj.code;
if (obj.pod == "n") {
	$(".content").css("background-color", "DarkGrey");
} else if (code >= 800 && code <= 803) {
	$(".content").css("background-color", "LightBlue");
} else {
	$(".content").css("background-color", "Grey");
}
