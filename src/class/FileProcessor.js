import Directory from './Directory';

/**
 * @typedef FileProcessorOptions
 * @property {RegExp} fileFilter
 * @property {string} nameFilter
 *
 *
 * @export
 * @class FileProcessor
 * @property {Directory} directory
 * @property {RegExp} fileFilter
 * @property {RegExp} nameFilter
 * @param {FileList} files
 * @param {FileProcessorOptions} options
 */
export default class FileProcessor {
  constructor(
    files = null,
    { fileFilter = /.(mp3|ogg)$/, nameFilter = '' } = {}
  ) {
    this.clear();
    this.fileFilter = fileFilter;
    this.setNameFilter(nameFilter);
    this.generateDirectories(files);
  }

  /**
   * Processes a file list and returns a Directory containing all the files and nested directories to properly simulate the local directory
   * @param {FileList} files
   * @returns Directory
   * @memberof FileProcessor
   */
  generateDirectories(files) {
    if (!(files instanceof FileList)) {
      return;
    }

    this.clear();

    for (let i = 0, l = files.length; i < l; i++) {
      if (
        this.fileFilter.test(files[i].name) &&
        this.nameFilter.test(files[i].name)
      ) {
        this.directory.addFile(files[i]);
      }
    }

    return this.directory;
  }

  /**
   * Clears the current Directory instance
   * @memberof FileProcessor
   */
  clear() {
    this.directory = new Directory();
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
