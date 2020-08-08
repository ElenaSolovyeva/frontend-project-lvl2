#!/usr/bin/env node

import program from 'commander';

let outputFormat;
program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<type>')
  .action((type) => outputFormat = type);

program.parse(process.argv);

if (typeOf outputFormat === 'undefined') {
  console.error('no output format given!');
}

console.log(program.args);
