import enclstcore from './index.js'

/**
 * Attr of Item
 * @property {string[]} positional positional parameters of this Attr
 * @property {object} named named parameters of this Attr as name&value pair
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
    if ("" == this.originalStr){
      this.positional = []
      this.named = {}
    } else {
      let posAndNamed = enclstcore.parseAttr(this.originalStr)
      this.positional = posAndNamed.positional
      this.named = posAndNamed.named  
    }
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
    if (0 == Object.keys(this.named).length){
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

  /**
   * serialize to string
   * @returns {string} string serialization
   */
  serialize(){
    return this.originalStr
  }

}