import {Attr} from './attr.js'

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

/**
 * Item
 * @property {Attr} attr       Attr object of this item
 * @property {string} path     path of this item
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
  constructor(str){
    /** @private */
    this.originalStr_ = str
    const a = this.originalStr_.split('|')

    switch(a.length){
      case 1:
        if (isPath(a[0])){
          /** @public */
          this.attr = new Attr('')
          /** @public */
          this.path = a[0].trim()
          /** @public */
          this.title = ""
        } else {
          this.attr = new Attr(a[0].trim())
          this.path = ""
          this.title = ""
        }
        break
      case 2:
//        if (isPath(a[0])){
          this.attr = new Attr('')
          this.path  = a[0].trim()
          this.title = a[1].trim()
/*        } else {
          this.attr  = new Attr(a[0].trim())
          this.path = ""
          this.title = a[1].trim()
        }*/
        break
      case 3:
        this.attr  = new Attr(a[0].trim())
        this.path  = a[1].trim()
        this.title = a[2].trim()
        break
      default:
        this.attr  = new Attr(a.shift().trim())
        this.path  = a.shift().trim()
        this.title = a.join('|').trim()
        break
    }
  }

}