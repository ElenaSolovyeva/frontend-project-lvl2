// ЗАДАНИЕ: Первым делом реализуйте тесты, описывающие требования к функциональности
// (то, как должно работать сравнение файлов).

// Создаем два файла с исходными данными (для 5го шага проекта это file3.yml file4.yml);
// Файл с результатом используем созданный ранее result.txt;
// В фале с тестом получаем пути к этим трем файлам, используя __filename и __dirname;
// Считываем содержание файла result.txt;
// Выполняем сравнение результата тестируемой функции (getDifference)
// с ожидаемым результатом (содержанием файла result.txt):
// - для двух json-файлов;
// - для двух yaml-файлов;
// - сравнение json-файла с yaml-файлом;
// - сравнение yaml-файла с json-файлом;

import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import getDifference from '../src/getDifference.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const path1 = getFixturePath('file1.json');
const path2 = getFixturePath('file2.json');
const path3 = getFixturePath('file3.yml');
const path4 = getFixturePath('file4.yml');
const pathResult = getFixturePath('result.txt');
const result = fs.readFileSync(pathResult, 'utf8').trim();

test('show difference json-json', () => expect(getDifference(path1, path2, 'txt')).toBe(result));
test('show difference yaml-yaml', () => expect(getDifference(path3, path4, 'txt')).toBe(result));
test('show difference json-yaml', () => expect(getDifference(path1, path4, 'txt')).toBe(result));
test('show difference yaml-json', () => expect(getDifference(path3, path2, 'txt')).toBe(result));
