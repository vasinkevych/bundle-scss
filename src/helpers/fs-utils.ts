import { writeFile, statSync, readFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import * as mkDir from 'make-dir';
import { mainConst } from './constants';
import { logger } from './logger';

export const isFile = (f: string) => statSync(f).isFile();

export const readSync = (filePath: string) => {
  try {
    return readFileSync(filePath, 'utf8');
  } catch (err) {
    logger(err);
  }
};

export const cwDir = () => process.cwd();

/*
* parse dir destination from des param crete folder if it doesn't exixt
* @param fileDest {string} - result file destination
*/
export const resolveDirDest = (fileDest: string) => {
  const path = mainConst.parseFilePathRegex.exec(fileDest);

  if (!existsSync(path[0])) {
    try {
      mkDir.sync(path[0]);
      logger(`${path[0]} - successfully created`);
    } catch (err) {
      logger(err);
    }
  } else {
    logger(`${path[0]} - already exist`);
  }
};
/*
* write result into dest file
* @param path {string} - output file
* @param content {string} - content in utf-8 format which should be written into file
* @return {Promise}
* */
export const writeAsync = (path: string, content: string) => {
  return new Promise((res, rej) => {
    writeFile(resolve(path), content, error => {
      if (error) {
        return rej(error);
      }

      return res(content);
    });
  });
};

/*
* attach extension to fileName and check if it exist or trow error
* @param filePath {string} - file path generated from sass `@import`
* @return filePath with appropriate extension `scss` by efault
* */
export const defineExtension = (filePath: string) => {
  const justScss = `${filePath}.${mainConst.fileType}`;

  if (isFile(justScss)) {
    return justScss;
  }
  throw new Error(`⛔ ⛔ ⛔ No file for module ${filePath}`);
};
