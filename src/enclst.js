import enclstcore from './index.js'

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
    this.innerItems = enclstcore.getListItems(this.resArray)
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

}
