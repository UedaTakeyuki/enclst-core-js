import enclstcore from './index.js'
import {Item} from './item.js'
//import fetch from 'cross-fetch';

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

    if (this.filepath != ""){
      this.readURL(this.filepath)
    } else if (str != ""){
      this.read(str)
    } else {
      this.title = ""
      this.items = []
    }
  }

  /**
   * make & set items
   * @private 
   */
  makeItems(){
    // return "" if blank array
    if (this.lines.length == 0){
      this.innerItems = []
      return
    }

    // copy resArray to cut items down. 
    let tempResArray = [...this.lines]

    // delete if last line is blank
    if (this.lines[this.lines.length - 1] == ""){
      // delete the last element
      tempResArray.pop()
    }
//    console.log("resArray", resArray)

    // remove title low
    if (this.lines.length >= 2 && this.lines[1] == ""){
      tempResArray.splice(0, 2) 
    }
//    console.log("resArray", resArray)

    // set after the 3rd low to the items
    // const items = resArray.splice(2, resArray.length -2)
    let items = []

    // separate item to url and title and set to this.items
    for (const itemStr of tempResArray){
      items.push(new Item(itemStr))
    }
    
    /** 
     * Decoded items of this enclst 
     * @type {Item[]}
     * @public 
     */
    this.items = items

    return
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


  /**
   * Calculate subsequent URL from the Current URL and Next path

  * @param {string} currentURL Current URL 
   * @param {string} path Next path
   * @param {string} base_url Base url of this path, or nil.
   * @returns {string} created URL as follows:
   * <ul>
   *   <li> if path is started from "http://", just return paht</li>
   *   <li> else if path is started from "/"
   *   <ul>
   *     <li> if base_url is not specified, return CurrentURL + path
   *     <li> if base_url is specified, return base_url + path
   *   </ul>
   *   <li> else, return URL(path, currentURL)
   * </ul>
   * 
   */
  static makeURLfromCurrentURLandPath(currentURL, path, base_url){
    if (path.substring(0,6) == "http://"){
      // path is full url
      return path
    } else if (path[0] == "/") {
      console.log("base_url",base_url)
      // path is full path
      if (base_url == undefined) {
        base_url = (new URL(currentURL)).origin
        console.log("base_url",base_url)
      }
      console.log("base_url",base_url)
      console.log("length",base_url.length)
      console.log("base_url[base_url.lenght -1]",base_url[base_url.length -1])
      if (base_url[base_url.length -1] == '/'){
//        base_url = base_url.substring(0, base_url.length -1)
        base_url = base_url.slice(0, -1)
        console.log("base_url",base_url)
      }
      return base_url + path
    } else {
      // path is relative path
      return (new URL(path, currentURL).toString())
    }
//    return ""
  }

  /** Static creator by URL string */
  static async createFromURL(urlStr) {
    let data = ""
    const res = await fetch(urlStr)
    if (res.status == 200) {
      data = await res.text();
    }
    let enclst = new EncLst(data)
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
    this.lines = enclstcore.stringToLines(str)
    /** @private */
    this.lines = enclstcore.stringToLines(str)


    /** 
     * Extracted title string of this enclst.
     * @public
     * @type {string}
     * 
     */
    this.title = enclstcore.getTitle(this.lines)
    this.makeItems()
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