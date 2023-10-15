const fs = require('fs');
const path = require('path');

if (process.argv.length < 3) {
    console.error('Укажите путь к файлу логов.');
    process.exit(1);
}

const logFilePath = path.resolve(process.argv[2]);

fs.readFile(logFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Ошибка чтения файла:", err);
        return;
    }

    const lines = data.split('\n');
    const totalGames = lines.length;
    let wins = 0;

    lines.forEach(line => {
        if (line.includes('Результат: Верно')) {
            wins++;
        }
    })

    const losses = totalGames - wins;
    const winPercentage = (wins / totalGames) * 100;

    console.log(`Общее количество партий: ${totalGames}`);
    console.log(`Количество выигранных партий: ${wins}`);
    console.log(`Количество проигранных партий: ${losses}`);
    console.log(`Процентное соотношение выигранных партий: ${winPercentage.toFixed(2)}%`);
})