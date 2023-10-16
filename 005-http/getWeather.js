const http = require('http');
const readline = require('readline');

const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({input, output});
const apiKey = process.env.apiKey;
const url = 'http://api.weatherstack.com/current';

const getWeather = () => {
    rl.question('Введите город ', (answer) => {
        http.get(`${url}?access_key=${apiKey}&query=${answer}`, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            })

            res.on('end', () => {
                const parsedData = JSON.parse(data);
                console.log(`Температура: ${parsedData.current.temperature}°C`);
                rl.close();
            })
        }).on('error', (err) => {
            console.error(err);
        })
    })
}

getWeather();