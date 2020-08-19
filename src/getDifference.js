import parse from './parsers.js';

const getDifference = (path1, path2) => {
  const obj1 = parse(path1);
  const obj2 = parse(path2);

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const resultKeys = keys1.filter((key) => !keys2.includes(key))
    .concat(keys2)
    .sort();

  const result = resultKeys.reduce((acc, key) => {
    const [newValue, oldValue] = ['+', '-'];

    if (!keys1.includes(key)) {
      return `${acc}\n  ${newValue}${key}: ${obj2[key]}`;
    }

    if (!keys2.includes(key)) {
      return `${acc}\n  ${oldValue}${key}: ${obj1[key]}`;
    }

    if (obj1[key] === obj2[key]) {
      return `${acc}\n   ${key}: ${obj1[key]}`;
    }

    return `${acc}\n  ${oldValue}${key}: ${obj1[key]}\n  ${newValue}${key}: ${obj2[key]}`;
  }, '{');

  return `${result}\n}`;
};

export default getDifference;
