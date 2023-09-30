import {Value} from './value.js'

/*
function isPath(s){
  if (s.substring(0,6) == "http://" || s.substring(0,7) == "https://" || s.substring(0,6) == "file://"){
    return true
  } else if (s.substring(0,1) == "./" || s.substring(0,0) == "/") {
    return true
  } else if (s.indexOf('/') != -1){
    return true
  } else {
    return false
  }
}
*/

/**
 * Item
 * @property {Value} value       Attr object of this item
 * @property {string} title    title of this item
 */
export class Item {
  //originalStr=""
  //attr
  //path
  //title

  /**
   * Create Attr from text.
   * 
   * @constructor
   * @param {string} str string red from Enclst file
   */
  constructor(str = ""){
    /** @private */
    this.originalStr_ = str
    if (this.originalStr_ == ""){
      this.value = new Value()
      this.title = ""
    } else {
      const separatedItemStr = this.originalStr_.split('|')
      switch(separatedItemStr.length){
        case 1:
          this.value = new Value(separatedItemStr.shift().trim())
          this.title = ""
          break
        case 2:
          this.value = new Value(separatedItemStr.shift().trim())
          this.title = separatedItemStr.shift().trim()
          break
        default:
          this.value  = new Value(separatedItemStr.shift().trim())
          this.title = separatedItemStr.join('|').trim()
          break
      }
    }
  }

  /**
   * serialize to string
   * @returns {string} string serialization
   */
  serialize(){
    let ser = this.value.serialize() + "|" + this.title
    return ser
  }
}