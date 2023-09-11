import enclstcore from './index.js'

/**
 * Attr of Item
 */
export class Attr {
  //originalStr=""
  //positional=[]
  //named={}

  /**
   * Create Attr from text.
   * 
   * @constructor
   * @param {string} str string red from Enclst file
   */
  constructor(str){
    this.originalStr = str
    let posAndNamed = enclstcore.parseAttr(this.originalStr)
    this.positional = posAndNamed.positional
    this.named = posAndNamed.named
  }

  /**
   * Get positional params.
   * @returns {string[]} positional params
   */
  positional(){
    return this.positional
  }

  /**
   * Get named params.
   * @returns {Object} named params as name & value pair
   */
  named(){
    return this.named
  }
  
  /**
   * Get original string of this attr.
   * @returns {string} named params 
   */
  toString(){
    return this.originalStr
  }

  /**
   * Has positional params?
   * @returns {bool} true if it has
   */
  hasPositinalParams(){
    if (0 == this.positional.length){
      return false
    } else {
      return true
    }
  }

  /**
   * Has named params?
   * @returns {bool} true if it has
   */
  hasNamedParams(){
    if (0 == this.named.keys().length){
      return false
    } else {
      return true
    }
  }

  /**
   * Has any params?
   * @returns {bool} true if it has
   */
  hasParams(){
    return this.hasPositinalParams() || this.hasNamedParams()
  }

}