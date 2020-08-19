import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const getDifference = (path1, path2) => {
  const typeOfFile1 = path.extname(path1);
  const typeOfFile2 = path.extname(path2);
  let obj1;
  let obj2;

  if (typeOfFile1 === '.json') {
    obj1 = JSON.parse(fs.readFileSync(path1, 'utf8'));
  } else if (typeOfFile1 === '.yml') {
    obj1 = yaml.safeLoad(fs.readFileSync(path1, 'utf8'));
  } else {
    return 'Unknown extantion of file1';
  }

  if (typeOfFile2 === '.json') {
    obj2 = JSON.parse(fs.readFileSync(path2, 'utf8'));
  } else if (typeOfFile2 === '.yml') {
    obj2 = yaml.safeLoad(fs.readFileSync(path2, 'utf8'));
  } else {
    return 'Unknown extantion of file2';
  }

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
