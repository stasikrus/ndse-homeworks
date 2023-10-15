const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({input, output});

const getRandomNumber = () => {
    return Math.floor((Math.random() * 2) + 1);
};

if (process.argv.length < 3) {
    console.error('Укажите имя файла для логирования.');
    process.exit(1);
}

const fileName = process.argv[2]; 
const fullLogFilePath = path.join(__dirname, fileName);
const randomNumber = getRandomNumber();

console.log('Загадано число в диапазоне от 1 до 2.');

const game = (file) => {
  rl.question('Угадайте число ', (answer) => {
    const answerNumber = Number(answer);
    const isCorrect = answerNumber === randomNumber;

    fs.appendFile(file, `Загадано: ${randomNumber} Ответ: ${answer} Результат: ${isCorrect ? 'Верно' : 'Неверно'}\n`, (err) => {
        if (err) {
            console.error("Ошибка записи в файл:", err);
        }
    });

    if (answerNumber !== randomNumber) {
        console.log('Попробуйте еще раз');
        game(file);
    } else {
        console.log('Верно!');
        rl.close();
    }
  })
}

game(fullLogFilePath);
