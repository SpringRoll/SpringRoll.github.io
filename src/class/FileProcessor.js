import { merge } from 'lodash-es';

/**
 * @typedef FileProcessorOptions
 * @property {RegExp} fileFilter
 * @property {string} nameFilter
 *
 * @export
 * @class FileProcessor
 */
export class FileProcessor {
  /**
   * Creates an instance of FileProcessor.
   * @param {FileList} files
   * @param {FileProcessorOptions} options
   */
  constructor(
    files = null,
    { fileFilter = /.(mp3|ogg)$/, nameFilter = '' } = {}
  ) {
    this.clear();
    this.generateFileTree(files);
    this.fileFilter = fileFilter;
    this.setNameFilter(nameFilter);
  }

  /**
   * Processes a file list and returns a object containing the files in a Object with correct directories
   * @param {FileList} files
   * @returns object
   * @memberof FileProcessor
   */
  generateFileTree(files) {
    if (!(files instanceof FileList)) {
      return;
    }

    this.clear();

    for (let i = 0, l = files.length; i < l; i++) {
      this.addFileToTree(files[i]);
    }
    return this.fileTree;
  }

  /**
   * Adds the file to the file tree for easier navigation
   * @param {File} file
   * @memberof FileProcessor
   * @returns object
   */
  addFileToTree(file) {
    const filePath = file.webkitRelativePath.split('/');

    const fileName = filePath.pop();

    if (!this.fileFilter.test(fileName) || !this.nameFilter.test(fileName)) {
      return;
    }

    this.fileCount++;

    const fileTree = this.generateObject(filePath, file);

    merge(this.fileTree, fileTree);

    return this.fileTree;
  }

  /**
   * Generates the file structure object based on the provided array of strings and file name
   * @param {string[]} list
   * @param {File} file
   * @param {object} [obj={}]
   * @returns object
   * @memberof FileProcessor
   */
  generateObject(list, file, obj = {}) {
    const name = list.pop();
    if ('undefined' === typeof name) {
      obj[file.name] = file;
      return obj;
    }

    obj[name] = {};

    this.generateObject(list, file, obj[name]);
    return obj;
  }

  /**
   * Clears the current file tree
   * @memberof FileProcessor
   */
  clear() {
    this.fileTree = {};
    this.fileCount = 0;
  }

  /**
   * Updates the filter applied to file names
   * @param {string} name
   * @memberof FileProcessor
   */
  setNameFilter(name) {
    if (!name.length) {
      this.nameFilter = /.*/g;
      return;
    }
    this.nameFilter = new RegExp(`(${name})`, 'g');
  }
}
