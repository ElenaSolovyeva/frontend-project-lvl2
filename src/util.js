import program from 'commander';
import path from 'path';
import getDifference from './getDifference.js';

const util = () => {
  program
    .version('0.0.1')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format <type>', 'output format')
    .arguments('<path1> <path2> <type>')
    .action((path1, path2, type) => {
      console.log(type); // В задании требуется указывать type в параметрах,
      // но пока он нигде не используется --> eslint ругается
      console.log(getDifference(path1, path2));

      console.log(`Current directory: ${process.cwd()}`);
      console.log(`Absolute path: ${path.resolve('file1.json')}`);
    });

  program.parse(process.argv);
};

export default util;
