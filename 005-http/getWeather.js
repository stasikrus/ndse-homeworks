const http = require('http');
const readline = require('readline');

const { stdin: input, stdout: output } = require('process');
const {apiKey, url} = require('./config');

const rl = readline.createInterface({input, output});

const getWeather = () => {
    rl.question('Enter the city ', (answer) => {
        http.get(`${url}?access_key=${apiKey}&query=${answer}`, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            })

            res.on('end', () => {
                const parsedData = JSON.parse(data);
                console.log(`Temperature: ${parsedData.current.temperature}°C, Weather: ${parsedData.current.weather_descriptions}`);
                rl.close();
            })
        }).on('error', (err) => {
            console.error(err);
        })
    })
}

getWeather();