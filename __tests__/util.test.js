import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import getDifference from '../src/getDifference.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const path1 = getFixturePath('file1.json');
const path2 = getFixturePath('file2.json');
const pathResult = getFixturePath('result.txt');
const result = fs.readFileSync(pathResult, 'utf8');

test('show difference', () => expect(getDifference(path1, path2, 'txt'))
  .toBe(result));
