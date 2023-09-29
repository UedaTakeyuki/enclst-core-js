import enclstcore from './index.js'
import {Item} from './item.js'

/**
 * Core features to handle Enclist.
 * @property {string} title title of this enclst
 * @property {Item[]} items Item of this enclst 
 */
export class EncLst {

//  resArray_ = []
//  title
//  items =[]

  /**
   * Create EncLstCore from text.
   * 
   * @constructor
   * @param {string} str string red from Enclst file
   */
  constructor(str=""){
    if (str != ""){
      /** @private */
      this.resArray_ = enclstcore.stringToResArray(str)

      /** @public */
      this.title = enclstcore.getTitle(this.resArray_)
      this.makeItems()
  //    this.innerItems = enclstcore.getListItems(this.resArray)
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
    if (this.resArray_.length == 0){
      this.innerItems = []
      return
    }

    // copy resArray to cut items down. 
    let tempResArray = [...this.resArray_]

    // delete if last line is blank
    if (this.resArray_[this.resArray_.length - 1] == ""){
      // delete the last element
      tempResArray.pop()
    }
//    console.log("resArray", resArray)

    // remove title low
    if (this.resArray_.length >= 2 && this.resArray_[1] == ""){
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
    
    /** @public */
    this.items = items

    return
  }

  /**
   * serialize to string
   * @returns {string} string serialization
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
   * make new URL from Current URL and Path
   * @returns {string} created URL
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


}
