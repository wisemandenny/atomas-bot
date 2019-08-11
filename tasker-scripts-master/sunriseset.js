var SunCalc = require('suncalc');
var sprintf = require('sprintf-js').sprintf;

getLocation('net', false, 30);
var loc = global('LOCN').split(','),
	lat = loc[0],
	lng = loc[1];

var times = SunCalc.getTimes(new Date(), lat, lng);
var rise  = sprintf('%i:%02i', times.sunrise.getHours(), times.sunrise.getMinutes());
var set   = sprintf('%i:%02i', times.sunset.getHours(), times.sunset.getMinutes());

setGlobal('SUNRISE', rise);
setGlobal('SUNSET', set);
