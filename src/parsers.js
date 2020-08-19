import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parse = (filePath) => {
  const typeOfFile = path.extname(filePath);

  return (typeOfFile === '.yml')
    ? yaml.safeLoad(fs.readFileSync(filePath, 'utf8'))
    : JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

export default parse;
