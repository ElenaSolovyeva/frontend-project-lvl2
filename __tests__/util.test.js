import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import util from '../src/util.js';

const __filename = fileURLToPath(import.meta.url);
console.log(`__filename: ${__filename}`);
const __dirname = dirname(__filename);
console.log(`__dirname: ${__dirname}`);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const path1 = getFixturePath('file1.json');
const path2 = getFixturePath('file2.json');
const result = getFixturePath('result.json');

test('show difference', () => expect(util(path1, path2, 'txt')).toBe(result));
