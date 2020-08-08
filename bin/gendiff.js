#!/usr/bin/env node

import program from 'commander';

let outputFormat;
program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format' )
  .arguments('<type>')
  .action((type) => outputFormat = type);

program.parse(process.argv);

if (typeof outputFormat === 'undefined') {
  console.error('no output format given!');
}

console.log(program.args);
