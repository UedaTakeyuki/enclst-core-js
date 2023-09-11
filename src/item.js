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
    this.originalStr = str
    const a = this.originalStr.split('|')

    switch(a.length){
      case 1:
        if (isPath(a[0])){
          this.innerAttr = new Attr('')
          this.innerPath = a[0].trim()
          this.innerTitle = ""
        } else {
          this.innerAttr = new Attr(a[0].trim())
          this.innerPath = ""
          this.innerTitle = ""
        }
        break
      case 2:
        if (isPath(a[0])){
          this.innerAttr = new Attr('')
          this.innerPath  = a[0].trim()
          this.innerTitle = a[1].trim()
        } else {
          this.innerAttr  = new Attr(a[0].trim())
          this.innerPath = ""
          this.innerTitle = a[1].trim()
        }
        break
      case 3:
        this.innerAttr  = new Attr(a[0].trim())
        this.innerPath  = a[0].trim()
        this.innerTitle = a[2].trim()
        break
      default:
        this.innerAttr  = new Attr(a.shift().trim())
        this.innerPath  = a.shift().trim()
        this.innerTitle = a.join('|').trim()
        break
    }
  }

  /**
   * Get attr
   * @returns {Attr} attr
   */
  attr(){
    return this.innerAttr
  }
  
  /**
   * Get path
   * @returns {string} path
   */
  path(){
    return this.innerPath
  }

  /**
   * Get title
   * @returns {string} title
   */
  title(){
    return this.innerTitle
  }


}