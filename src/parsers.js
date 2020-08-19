import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parse = (filePath) => {
  const typeOfFile = path.extname(filePath);

  return (typeOfFile === '.yml')
    ? yaml.safeLoad(fs.readFileSync(path, 'utf8'))
    : JSON.parse(fs.readFileSync(path, 'utf8'));
};

export default parse;
