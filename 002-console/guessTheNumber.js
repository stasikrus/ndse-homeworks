#!/usr/bin/env node
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({input, output});

const randomNumber = Math.floor(Math.random() * 101);

console.log('Загадано число в диапазоне от 0 до 100.');

function askQuestion() {
    rl.question('Ваш ответ: ', (answer) => {
        const answerNumber = Number(answer);

        if (isNaN(answerNumber)) {
            console.log('Пожалуйста, введите допустимое число.');
            askQuestion();
            return;
        }

        if (answerNumber === randomNumber) {
            console.log(`Отгадано число ${randomNumber}`);
            rl.close();
        } else if (answerNumber < randomNumber) {
            console.log('Больше\n');
            askQuestion();  
        } else {
            console.log('Меньше\n');
            askQuestion();  
        }
    });
}

askQuestion();  