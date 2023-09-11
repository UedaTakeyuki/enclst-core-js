import enclstcore from './index.js'
import {Item} from './item.js'

/**
 * Core features to handle Enclist.
*/
export class EncLst {

//  resArray = []
//  innerItems =[]

  /**
   * Create EncLstCore from text.
   * 
   * @constructor
   * @param {string} str string red from Enclst file
   */
  constructor(str){
    this.resArray = enclstcore.stringToResArray(str)
    this.makeItems()
//    this.innerItems = enclstcore.getListItems(this.resArray)
  }

  /**
   * Get title of this Enclst.
   * @returns {string} Title string
   */
  title(){
    return enclstcore.getTitle(this.resArray)
  }

  /**
   *  Get list items of an Enclist.
   * @returns {Item[]}
   */
  items(){
    return this.innerItems
  }

  makeItems(){
    // return "" if blank array
    if (this.resArray.length == 0){
      this.innerItems = []
      return
    }

    // copy resArray to cut items down. 
    let tempResArray = [...this.resArray]

    // delete if last line is blank
    if (this.resArray[this.resArray.length - 1] == ""){
      // delete the last element
      tempResArray.pop()
    }
//    console.log("resArray", resArray)

    // remove title low
    if (this.resArray.length >= 2 && this.resArray[1] == ""){
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
    this.innerItems = items

    return
  }

}
