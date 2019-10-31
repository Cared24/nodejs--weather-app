const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// Get Location input
const location = process.argv[2];

// Calculate input location's forecast
if (!location) {
    console.log('Kérjük szépen adjon meg egy egy helyszínt!');
} else {
    geocode(location, (error, data) => {
        console.log(chalk.bgBlue.white('Geolocation'));
        if (error) {
            return console.log(error);
        }

        forecast(data.latitude, data.longitude, (error, forecastData) => {
            console.log(chalk.bgGreen.white('Forecast'));
            if (error) {
                console.log('Error: ', error);
            }
            console.log(data.location);
            console.log(forecastData);
        })
    });
}
