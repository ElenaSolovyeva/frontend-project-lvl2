// Запуск с тестом  $ node tests/capitalize.test.js
import util from '../src/util.js';

const result = '{-follow: false   host: hexlet.io  -proxy: 123.234.53.22  -timeout: 50  +timeout: 20  +verbose: true}';
const path1 = '/mnt/c/Projects/frontend-project-lvl2/src/file1.json';
const path2 = '/mnt/c/Projects/frontend-project-lvl2/src/file2.json';

test('show difference', () => expect(util(path1, path2, 'txt')).toBe(result));
