import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import ini from 'ini';

const parse = (filePath) => {
  const typeOfFile = path.extname(filePath);

  switch (typeOfFile) {
    case ('.json'):
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    case ('.yml'):
      return yaml.safeLoad(fs.readFileSync(filePath, 'utf8'));
    case ('.ini'):
      return ini.parse(fs.readFileSync(filePath, 'utf8'));
    default:
      return null;
  }

  // return (typeOfFile === '.yml')
  //   ? yaml.safeLoad(fs.readFileSync(filePath, 'utf8'))
  //   : JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

export default parse;
