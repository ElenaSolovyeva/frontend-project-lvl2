import parse from './parsers.js';

const compareTrees = (path1, path2) => {
  const first = parse(path1);
  const second = parse(path2);

  const keys1 = Object.keys(first);
  const keys2 = Object.keys(second);

  // Построить общий список ключей
  const commonKeys = keys1
    .filter((key) => !keys2.includes(key))
    .concat(keys2);
  // и запустить на нем reduce c аккумулятором - пустым объектом
  return commonKeys.reduce((acc, key) => {
    // Проверить, содержит ли 1й объект данный ключ, а 2й объект не содержит:
    if (keys1.includes(key) && !keys2.includes(key)) {
      // добавить в аккумулятор "-" и пару ключ-значение 1го объекта
      acc[`- ${key}`] = first[key];
    // Проверить, содержит ли 2й объект данный ключ, а 1й объект не содержит:
    } else if (!keys1.includes(key) && keys2.includes(key)) {
      // добавить в аккумулятор "+" и пару ключ-значение
      acc[`+ ${key}`] = second[key];
    // Если оба объекта содержат текущий ключ
    // проверить, является value ключа объектом
    } else if ((first[key] instanceof Object) && (second[key] instanceof Object)) {
      // Если ДА - вызвать рекурсивно сравнение, передав в параметры value обоих объектов
      acc[key] = compareTrees(first[key], second[key]);// 'object';
      // Если value ключа НЕ является объектом
      // сравнить value обоих объектов для данного ключа
    } else if ((first[key] === second[key])) { // странно, но массивы сравниваются правильно
      // Если value РАВНЫ - добавить в АСС пару ключ-значение
      acc[key] = first[key];
    } else {
      // Если value НЕ РАВНЫ - добавить в АСС:
      //  "-" и ключ-значение 1го объекта
      acc[`- ${key}`] = first[key];
      // "+" и ключ-значение 2го объекта
      acc[`+ ${key}`] = second[key];
    }

    return acc;
  }, {});
};

export default compareTrees;
