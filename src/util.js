import program from 'commander';
import fs from 'fs';

const util = () => {
  program
    .version('0.0.1')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format <type>', 'output format')
    .arguments('<path1> <path2> <type>')
    .action((path1, path2, type) => {
      console.log(type); // В задании требуется указывать type в параметрах,
      // но пока он нигде не используется --> eslint ругается
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
          return `${acc}
          ${newValue}${key}: ${obj2[key]}`;
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
};

export default util;
