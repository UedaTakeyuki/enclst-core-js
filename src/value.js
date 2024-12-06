import enclstcore from './index.js'

/**
 * Attr of Item
 * @property {string[]} positional positional parameters of this Attr
 * @property {object} named named parameters of this Attr as name&value pair
 */
export class Value {
  //originalStr_=""
  //positional=[]
  //named={}

  /**
   * Create Attr from text.
   * 
   * @constructor
   * @param {string} str string red from Enclst file
   */
  constructor(str=""){
    /** @private */
    this.originalStr_ = str

    /** 
     * Extracted title string of this item<br>
     * For more detail refer <a href="https://github.com/UedaTakeyuki/EncLst/tree/main?tab=readme-ov-file#positional">here</a>
     * @public
     * @type {string[]}
     */
        this.positional = []
    /** 
     * Extracted title string of this item<br>
     * For more detail refer <a href="https://github.com/UedaTakeyuki/EncLst/tree/main?tab=readme-ov-file#named">here</a>
     * @public
     * @type {Object}
     */
    this.named = {}

    this.readStr(str)
/*
    if ("" == this.originalStr_){
    } else {
      this.readStr(str)
      let posAndNamed = enclstcore.parseAttr(this.originalStr_)
      this.positional = posAndNamed.positional
      this.named = posAndNamed.named  
    }
*/
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
   * first positional value or ""
   */
  first(){
    if (this.hasPositinalParams()){
      return this.positional[0]
    } else {
      return ""
    }
  }

  readStr(valueStr){
    if ("" != valueStr) {
      var values = valueStr.split(',');
      for (var i = 0; i < values.length; i++) {
        values[i] = values[i].trim();
  
        // push to positional
        this.positional.push(values[i]);
  
        var nameAndValue = this.positional[i].split('=');
        if (nameAndValue.length == 2) {
          // set this as named
          this.named[nameAndValue[0].trim()] = nameAndValue[1].trim();
        }
      }
    }
    return this
  }

  /**
   * serialize to string
   * @returns {string} string serialization
   */
  serialize(){
    //return this.originalStr_
    let ser = ""
    if (this.hasPositinalParams()){
      ser = this.positional.join()
    }
    if (this.hasNamedParams()){
      for (const property in this.named){
        ser = ser + "," + property + "=" + this.named[property]
      }
    }
    return ser
  }

}