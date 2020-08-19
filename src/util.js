import program from 'commander';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import getDifference from './getDifference.js';

const util = () => {
  program
    .version('0.0.1')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format <type>', 'output format')
    .arguments('<path1> <path2> <type>')
    .action((file1, file2, type) => {
      console.log(type); // В задании требуется указывать type в параметрах,
      // но пока он нигде не используется --> eslint ругается
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = dirname(__filename);
      const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
      const path1 = getFixturePath(file1);
      const path2 = getFixturePath(file2);

      console.log(getDifference(path1, path2));
    });

  program.parse(process.argv);
};

export default util;
