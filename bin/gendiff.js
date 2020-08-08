#!/usr/bin/env node

import program from 'commander';

let outputFormat;
let pathFile1;
let pathFile2;

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format' )
  .arguments('<type> <path1> <path2>')
  .action((type, path1, path2) => {
    outputFormat = type;
    pathFile1 = path1;
    pathFile2 = path2;
  });

program.parse(process.argv);

if (typeof outputFormat === 'undefined') {
  console.error('no output format given!');
}

console.log(program.args);
