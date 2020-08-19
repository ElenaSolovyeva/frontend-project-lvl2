// Первым делом реализуйте тесты, описывающие требования к функциональности
// (то, как должно работать сравнение файлов).

// Создаем два файла с исходными данными (для 5го шага проекта это file3.yml file4.yml);
// Файл с результатом используем созданный ранее result.txt;
// В фале с тестом получаем пути к этим трем файлам, используя __filename и __dirname;
// Считываем содержание файла result.txt;
// Выполняем сравнение результата тестируемой функции (getDifference)
//    с ожидаемым результатом (содержанием файла result.txt)

import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import getDifference from '../src/getDifference.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const path1 = getFixturePath('file3.yml');
const path2 = getFixturePath('file4.yml');
const pathResult = getFixturePath('result.txt');
const result = fs.readFileSync(pathResult, 'utf8').trim();

test('show difference', () => expect(getDifference(path1, path2, 'txt')).toBe(result));
