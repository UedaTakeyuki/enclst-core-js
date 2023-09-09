import enclstcore from './index.js'

/**
 * Core features to handle Enclist
 */
export class EncLstCore {

//  resArray = []
//  items =[]

  /**
   * @param {string} str string red from Enclst file
   */
  constructor(str){
    this.resArray = enclstcore.stringToResArray(str)
    this.items = enclstcore.getListItems(this.resArray)
  }

  /**
   * get Title 
   */
  getTitle(){
    return enclstcore.getTitle(this.resArray)
  }

  /**
   * get Title 
   */
  getListItems(){
    return this.items
  }

}
