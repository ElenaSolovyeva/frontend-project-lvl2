'use strict';

import program from 'commander';
import fs from 'fs';
// import getFilesDifference from 'getFilesDifference.js'

const getData = (path) => {

  fs.read(path, (err, data) => {
    if (err) {
      throw err;
    }
    // Распарсить полученные файлы с помощью JSON.parse(text);
    return JSON.parse(data);
  });
};

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
      // Нужно получить содержимое файлов на основании их адресов
      const obj1 = getData(path1);
      const obj2 = getData(path2);
      console.log(obj1, obj2);
    });

  program.parse(process.argv);

  // if (typeof outputFormat === 'undefined') {
  //   console.error('no output format given!');
  // }

  console.log(program.args);
};

export default util;


// Получить на основании параметров с адресами 2х файлов два файла JSON,
// содержащих свойства сравниваемых файлов

// Опарсить каждый из 2х полученных JSON-файлов, присвоить их свойства объектам

// На данном этапе использую готовые объекты
// const file1Properties = {
//   "host": "hexlet.io",
//   "timeout": 50,
//   "proxy": "123.234.53.22",
//   "follow": false
// };
//
// const file2Properties = {
//   "timeout": 20,
//   "verbose": true,
//   "host": "hexlet.io"
// };

//console.log(getFilesDifference(file1Properties, file2Properties));
