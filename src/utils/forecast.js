const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=bad3cdd9cb7ac8c8f3d1dee26b1a28cd&query=${latitude},${longitude}`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, `It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`);
        }
    });
};

module.exports = forecast;