//import enclstcore from './index.js'
import {Item} from './index.js'
import {Value} from './index.js'
//import fetch from 'cross-fetch';

/**
 * Create Result Array, an array by dividing a string with line feed codes.
 * 
 */
function stringToLines(str){
  let resArray = []
  if (str){
    resArray = str.split(/\r\n|\n/)
  }
//    console.log("resArray", resArray)
  return resArray
}

/**
 * An enclst object.
 * @param {string} str A string representing the encrust. In case a non-empty filepath is specified, it will be ignored.
 * @param {string} filepath A string representing the filepath where to read. The param str is ignored if this param is specified.
 * @mixes ValueChecker
 * @mixes FilePath
 */
export class EncLst {

//  lines = []
//  title
//  items =[]
//  filePath ={}

    constructor(str="", filepath=""){
    /**
     * Filepath where this enclst is saved.
     * @public
     * @type {string}
     */
    this.filepath = filepath

    /**
     * Title of this enclst.
     * @public
     * @type {string}
     */
    this.title = ""

    /**
     * Array of Item objects.
     * @public
     * @type {Array.Item}
     */
    this.items = []

    /**
     * Value object of this enclst.
     * @public
     * @type {Value}
     */
    this.value = new Value()

    if (this.filepath != ""){
      this.readURL(this.filepath)
    } else if (str != ""){
      this.read(str)
    }
  }

  /**
   * Serialize this enclst object to the <a href="https://github.com/UedaTakeyuki/EncLst?tab=readme-ov-file#enclst-notation">Enclst Notation</a> string
   * @returns {string} A serialized <a href="https://github.com/UedaTakeyuki/EncLst?tab=readme-ov-file#enclst-notation">Enclst Notation</a> string of this enclst object.
   */
  serialize(){
    let ser = ""
    if (this.title != ""){
      ser = this.title + "\n\n"
    }
    if (this.items.length != 0){
      for (const item of this.items){
        ser = ser + item.serialize() + "\n"
      }
      // remove last cr
      ser = ser.substring(0, ser.length - 1);
    }
    return ser
  }

  /** Static creator by URL string */
  static async createFromURL(urlStr) {
  /*  
    let data = ""
    const res = await fetch(urlStr)
    if (res.status == 200) {
      data = await res.text();
    }
  */
    let enclst = new EncLst()
    await enclst.readURL(urlStr)
    return enclst;
  }

  // create successor
  async nextEnclst(path,v_root = "") {
//    nextfilepath = this.filePath.nextFilePath(path, v_root);
    nextfilepath = this.nextFilePath(path, v_root);
    return await this.createFromURL(nextfilepath);
  }

  /** read enclst string and refresh this */
  read(str){
    let lines = stringToLines(str)

    this.title = lines[0]

    // Delete the first line, which is title.
    lines.shift()

    // find a blank line
    while (lines.length != 0) {
      if (lines[0] == "") {
        // remove blank line
        lines.shift();
        break;
      } else {
        // append to value
        this.value.readStr(lines[0]);
        lines.shift();
      }
    }

    // make items
    while (lines.length != 0) {
      var line = lines[0];
      if (line != "") {
        this.items.push(new Item(lines[0]))
      }
      lines.shift();
    }
  }

  async readURL(urlStr){
    this.filepath = urlStr
    let data = ""
    const res = await fetch(urlStr)
    if (res.status == 200) {
      data = await res.text();
    }
    this.read(data)
  }
}


// Mixin
import {ValueChecker} from './mixins/value_checker.js'
Object.assign(EncLst.prototype, ValueChecker);
import {FilePath} from './mixins/filepath.js'
Object.assign(EncLst.prototype, FilePath);