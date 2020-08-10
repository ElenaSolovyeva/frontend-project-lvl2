'use strict';

// Результатом работы функции genDiff является строка!!!!!

const getFilesDifference = (file1Properties, file2Properties) => {
  // Создать массивы из ключей 2х объектов, объединить, отсортировать
  const keys1 = Object.keys(file1Properties);
  const keys2 = Object.keys(file2Properties);

  const resultKeys = _.difference(keys1, keys2).concat(keys2).sort();

  // Применить reduce, аккумулятор будет объектом,
  // заносить в несго пары ключ-значения с обработкой, одинаковые значения или нет
  // с добавлением "+" и "-" к названию ключа
  const result = resultKeys.reduce((acc, key) => {
    const [newValue, oldValue] = ['+', '-'];

    if (!keys1.includes(key)) {
      acc = `${acc}
      ${newValue}${key}: ${file2Properties[key]},`; //
      return acc;
    }

    if (!keys2.includes(key)) {
      return `${acc}
      ${oldValue}${key}: ${file2Properties[key]},`;
    }

    if (file1Properties[key] === file2Properties[key]) {
      return `${acc}
       ${key}: ${file2Properties[key]},`;
    }

    return `${acc}
      ${oldValue}${key}: ${file1Properties[key]},
      ${newValue}${key}: ${file2Properties[key]},`;
  }, '');

  return `{${result.slice(0, (result.length-1))}
  }`;
};

export default getFilesDifference;
