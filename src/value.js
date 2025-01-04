import enclstcore from './index.js'

/**
 * Attr of Item
 * @property {string[]} positional positional parameters of this Attr
 * @property {object} named named parameters of this Attr as name&value pair
 */
export class Value {

  /**
   * Create Attr from text.
   * 
   * @constructor
   * @param {string} str string red from Enclst file
   */
  constructor(str=""){
    /** @private */
    this._originalStr = str

    /** 
     * Extracted title string of this item<br>
     * For more detail refer <a href="https://github.com/UedaTakeyuki/EncLst/tree/main?tab=readme-ov-file#positional">here</a>
     * @public
     * @type {string[]}
     */
    this.positionalValues = []

    /** 
     * Extracted title string of this item<br>
     * For more detail refer <a href="https://github.com/UedaTakeyuki/EncLst/tree/main?tab=readme-ov-file#named">here</a>
     * @public
     * @type {Object}
     */
    this.namedValues = {}

    // read string
    this.readStr(str)
  }
  
  /**
   * Has positional values?
   * @returns {bool} true if it has
   */
  hasPositinalValues(){
    if (0 == this.positionalValues.length){
      return false
    } else {
      return true
    }
  }

  /**
   * Has named values?
   * @returns {bool} true if it has
   */
  hasNamedValues(){
    if (0 == Object.keys(this.namedValues).length){
      return false
    } else {
      return true
    }
  }

  /**
   * Has any values?
   * @returns {bool} true if it has
   */
  hasValues(){
    return this.hasPositinalValues() || this.hasNamedValues()
  }

  /**
   * first positional value or ""
   */
  first(){
    if (this.hasPositinalValues()){
      return this.positionalValues[0]
    } else {
      return ""
    }
  }

  /**
   * last positional value or ""
   */
  last(){
    if (this.hasPositinalValues()){
      const length = this.positionalValues.length
      return this.positionalValues[length -1]
    } else {
      return ""
    }
  }

  /**
   * Is a string in this positional value?
   */
  isIn(aStr){
    if (this.hasPositinalValues()){
      if (this.positionalValues.find(value => value === aStr)){
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  /**
   * Is a sring in this positional value as substring?
   */
  isInAsSubStr(aStr){
    if (this.hasPositinalValues()){
      if (this.positionalValues.find(value => value.includes(aStr))){
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  /**
   * read value string if not ""
   */
  readStr(valueStr){
    if ("" != valueStr) {
      var values = valueStr.split(',');
      for (var i = 0; i < values.length; i++) {
        values[i] = values[i].trim();
  
        // push to positional
        this.positionalValues.push(values[i]);
  
        var nameAndValue = this.positionalValues[i].split('=');
        if (nameAndValue.length == 2) {
          // set this as named
          this.namedValues[nameAndValue[0].trim()] = nameAndValue[1].trim();
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
    if (this.hasPositinalValues()){
      ser = this.positionalValues.join()
    }
    if (this.hasNamedValues()){
      for (const property in this.namedValues){
        ser = ser + "," + property + "=" + this.namedValues[property]
      }
    }
    return ser
  }
}