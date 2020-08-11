'use strict';

import program from 'commander';
import fs from 'fs';

const util = () => {
  program
    .version('0.0.1')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format <type>', 'output format' )
    .arguments('<path1> <path2> <type>')
    .action((path1, path2, type) => {
      const outputFormat = type;
      // Нужно получить содержимое файлов на основании их адресов
      const obj1 = JSON.parse(fs.readFileSync(path1, 'utf8'));
      const obj2 = JSON.parse(fs.readFileSync(path2, 'utf8'));
      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);
      const resultKeys = keys1.filter((key) => !keys2.includes(key))
        .concat(keys2)
        .sort();

      const result = resultKeys.reduce((acc, key) => {
        const [newValue, oldValue] = ['+', '-'];

        if (!keys1.includes(key)) {
          acc = `${acc}
          ${newValue}${key}: ${obj2[key]}`;
          return acc;
        }

        if (!keys2.includes(key)) {
          return `${acc}
          ${oldValue}${key}: ${obj1[key]}`;
        }

        if (obj1[key] === obj2[key]) {
          return `${acc}
           ${key}: ${obj1[key]}`;
        }

        return `${acc}
          ${oldValue}${key}: ${obj1[key]}
          ${newValue}${key}: ${obj2[key]}`;
      }, '');

      console.log(`{${result}
    }`);
    });

  program.parse(process.argv);

  // if (typeof outputFormat === 'undefined') {
  //   console.error('no output format given!');
  // }

  // console.log(program.args);
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
