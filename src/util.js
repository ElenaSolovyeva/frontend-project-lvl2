'use strict';

import program from 'commander';
// import getFilesDifference from 'getFilesDifference.js'

const util = () => {
  program
    .version('0.0.1')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format <type>', 'output format' )
    .arguments('<path1> <path2> <type>')
    .action((path1, path2, type) => {
      const pathFile1 = path1;
      const pathFile2 = path2;
      const outputFormat = type;
    });

  program.parse(process.argv);

  if (typeof outputFormat === 'undefined') {
    console.error('no output format given!');
  }

  console.log(program.args);
};

export default util;


// Получить на основании параметров с адресами 2х файлов два файла JSON,
// содержащих свойства сравниваемых файлов

// Опарсить каждый из 2х полученных JSON-файлов, присвоить их свойства объектам

// На данном этапе использую готовые объекты
const file1Properties = {
  "host": "hexlet.io",
  "timeout": 50,
  "proxy": "123.234.53.22",
  "follow": false
};

const file2Properties = {
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io"
};

//console.log(getFilesDifference(file1Properties, file2Properties));
