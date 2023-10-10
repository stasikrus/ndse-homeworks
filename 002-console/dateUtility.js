#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const getCurrentDateTime = () => {
    return new Date().toISOString();
};

const getCurrentYear = () => {
    return new Date().getFullYear().toString();
};

const getCurrentMonth = () => {
    return (new Date().getMonth() + 1).toString().padStart(2, '0');
};

const getCurrentDayOfMonth = () => {
    return new Date().getDate().toString().padStart(2, '0');
};

const getDateInFutureOrInPast = (offset, type) => {
    const date = new Date();

    switch(type) {
        case 'd':
            date.setDate(date.getDate() + offset);
            break;
        case 'm':
            date.setMonth(date.getMonth() + offset);
            break;
        case 'y':
            date.setFullYear(date.getFullYear() + offset);
            break;
        default:
            throw new Error('Invalid type');            
    }

    return date.toISOString();
};

yargs(hideBin(process.argv))
  .command('current', 'Get current date and time', (yargs) => {
    return yargs
      .option('d', { describe: 'Get current day', type: 'boolean' })
      .option('m', { describe: 'Get current month', type: 'boolean' })
      .option('y', { describe: 'Get current year', type: 'boolean' })
  }, (argv) => {
    if (argv.d) {
        console.log(getCurrentDayOfMonth());
    } else if (argv.m) {
        console.log(getCurrentMonth());
    } else if (argv.y) {
        console.log(getCurrentYear());
    } else {
        console.log(getCurrentDateTime());
    }
  })
  .command('add', 'Get date and time in the future', (yargs) => {
    return yargs
      .option('d', {describe: 'Day', type: 'number'})
      .option('m', {describe: 'Month', type: 'number'})
      .option('y', {describe: 'Year', type: 'number'})
  }, (argv) => {
    if (argv.d) {
        console.log(getDateInFutureOrInPast(argv.d, 'd'));
    } else if (argv.m) {
        console.log(getDateInFutureOrInPast(argv.m, 'm'));
    } else if (argv.y) {
        console.log(getDateInFutureOrInPast(argv.y, 'y'));
    } else {
        console.error('Invalid arguments')
    }
  })
  .command('sub', 'Get date and time in the past', (yargs) => {
    return yargs
        .option('d', { describe: 'Days', type: 'number' })
        .option('m', { describe: 'Months', type: 'number' })
        .option('y', { describe: 'Year', type:  'number' });
   }, (argv) => {
    if (argv.d) {
        console.log(getDateInFutureOrInPast(-argv.d, 'd'));
    } else if (argv.m) {
        console.log(getDateInFutureOrInPast(-argv.m, 'm'));
    } else if (argv.y) {
        console.log(getDateInFutureOrInPast(-argv.y, 'y'));
    } else {
        console.error('Invalid arguments')
    }
})
.argv;