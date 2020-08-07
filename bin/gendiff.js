#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-v, --version', 'output the version number')
  .option('-h, --help', 'output usage information');

// "Эта строчка приведена в документации без пояснений; непонятно, что такое process и argv"
// Есть такое: "The options can be accessed as properties on the Command object.", но что это за объект?
// Напрашивается мысль, что process - это объект, а argv - значения аргументов, но что это за аргументы?
program.parse(process.argv);

// if (program.version) console.log();

console.log('Здесь должна быть информация...');
