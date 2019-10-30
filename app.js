const request = require('request');

const url = 'https://api.darksky.net/forecast/89df8d9c29460ee59f732f16036c2a3c/37.8267,-122.4233?lang=hu';

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service');
    } else if (response.body.error) {
        console.log('Unable to find location!');
    } else {
        const res = response.body.currently;
        console.log(response.body.daily.data[0].summary);
        console.log(`it is currently ${res.temperature} degrees out. There is a ${res.precipProbability}% chance of rain.`);
    }

});

// -------------------------------------------------------------
// Geocoding
// Address -> Lat/Long -> Weather

const morahalom = 'https://api.mapbox.com/geocoding/v5/mapbox.places/morahalom.json?access_token=pk.eyJ1IjoiY2FyZWQyNCIsImEiOiJjazJhZmo0ZHYxMnRmM2ZvYmN5cmoxcXNxIn0.pDJregwikC4n-jC7RhZ0Mg';

request({ url: morahalom, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to GeoLocation servers!');
    } else if (response.body.features.length === 0) {
        console.log('Place cannot be found!');
    } else {
        const latitue = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log(`Mórahalom latitude ${latitue}`);
        console.log(`Mórahalom longitude ${longitude}`);
    }
});