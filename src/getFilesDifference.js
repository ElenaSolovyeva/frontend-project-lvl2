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
    if (!keys1.includes(key)) {
      acc[`+${key}`] = file2Properties[key];
    }

    if (!keys2.includes(key)) {
      acc[`-${key}`] = file1Properties[key];
      return acc;
    }

    if (file1Properties[key] === file2Properties[key]) {
      acc[key] = file1Properties[key];
      return acc;
    }

    acc[`-${key}`] = file1Properties[key];
    acc[`+${key}`] = file2Properties[key];
    return acc;

  }, {})

  return result;
};

export default getFilesDifference;
