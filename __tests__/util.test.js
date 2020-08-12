// Запуск с тестом  $ node tests/capitalize.test.js

// Достаточно написать ровно одну проверку, которая покрывает основной сценарий.
// Дальше нужно смотреть на "пограничные случаи":
//  - Работа с пустой строкой;
//  - Обработка null;
//  - Деление на ноль (в большинстве языков вызывает ошибку)
//  - Специфические ситуации для конкретных алгоритмов.

// Ошибки типов входных данных тестировать не нужно!

// ***** Утверждения (Asserts) *****

// import { strict as assert } from 'assert';
// import util from '../src/util.js';
//
// assert(util() === {});

// Специализированные утверждений, заточенные под конкретные ситуации:
//  - assert.strictEqual(actual, expected)
//    подходит при сравнении двух значений; проверяет равенство ПО ССЫЛКЕ
//    assert.strictEqual(capitalize('hello'), 'Hello');

//  - assert.deepStrictEqual(actual, expected) - для сравнения ПО ЗНАЧЕНИЮ
//    assert.deepStrictEqual({ key: 'value' }, { key: 'value' });

// ************* Библиотека power-assert **********

// import assert from 'power-assert';
// import util from '../src/util.js';
//
// assert(util() === {});

// л
