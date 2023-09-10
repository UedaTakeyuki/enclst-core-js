import enclstcore from './index.js'

/**
 * Core features to handle Enclist.
*/
export class EncLstCore {

//  resArray = []
//  items =[]

  /**
   * Create EncLstCore from text.
   * 
   * @constructor
   * @param {string} str string red from Enclst file
   */
  constructor(str){
    this.resArray = enclstcore.stringToResArray(str)
    this.items = enclstcore.getListItems(this.resArray)
  }

  /**
   * Get title of this Enclst.
   * @returns {string} Title string
   */
  getTitle(){
    return enclstcore.getTitle(this.resArray)
  }

  /**
   *  Get list items of an Enclist.
   * @returns {Items}
   */
  getListItems(){
    return this.items
  }

}
