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

export {EncLst} from './enclst.js'
export {Item} from './item.js'
export {Value} from './value.js'

/*
 * @module enclist-core-js
 */
export default {
  /**
   * Create Result Array, an array by dividing a string with line feed codes.
   * 
   */
  stringToLines(str){
    let resArray = []
    if (str){
      resArray = str.split(/\r\n|\n/)
    }
//    console.log("resArray", resArray)
    return resArray
  },

  /**
   * get title of an Enclst from Resut Array.
   * 
   */
  getTitle(resArray){
    // return "" if no title
    if (resArray.length < 2) {
      return ""
    } else if (resArray[1] != "") {
      return ""
    } else {
      // return first elem as title
      return resArray[0]
    }
  },

/*
 * 
 * posAndNamedType
 * 
 * Ojbect to return parsed attr string as array of positional params and name & value pair of named params.
 * @typedef {Object} posAndNamedTypie
 * @property {string[]} positional Array of string for positional params
 * @property {Object} named Object of name(string) & value(string) pair of named params
 */

  /**
   * parse attr
   * 
   * @param {strng} attr
   * @returns {posAndNamedType} parse result a positional params & named params
   */
/*
  parseAttr(attr){
    let positional = attr.split(',')
    let positionalResult = []
    let namedResult = {}
    for (let i = 0; i < positional.length; i++){
      positional[i] = positional[i].trim()

      // push to positional
      positionalResult.push(positional[i])

      let nameAndValue = positional[i].split('=')
      if (nameAndValue.length == 2){
        // set this as named 
        namedResult[nameAndValue[0].trim()] = nameAndValue[1].trim()
      }
    }

    return { positional: positionalResult, named: namedResult}
  }
*/
}
