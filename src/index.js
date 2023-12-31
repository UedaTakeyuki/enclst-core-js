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
  stringToResArray(str){
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

  /**
   * get list items of an Enclist from Result Array.
   * 
   */
  /*
  getListItems(resArray){
    // return "" if blank array
    if (resArray.length == 0){
      return []
    }

    // delete if last line is blank
    if (resArray[resArray.length - 1] == ""){
      // delete the last element
      resArray.pop()
    }
//    console.log("resArray", resArray)

    // remove title low
    if (resArray.length >= 2 && resArray[1] == ""){
      resArray.splice(0, 2) 
    }
//    console.log("resArray", resArray)

    // set after the 3rd low to the items
    // const items = resArray.splice(2, resArray.length -2)
    let items = []

    // separate item to url and title and set to this.items
    for (const item of resArray){
      const a = item.split('|')

      switch(a.length){
        case 1:
          if (isPath(a[0])){
            items.push({"path": a[0].trim()})
          } else {
            items.push({"attr": a[0].trim()})
          }
          break
        case 2:
          if (isPath(a[0])){
            items.push({"path": a[0].trim(), "title": a[1].trim()})
          } else {
            items.push({"attr": a[0].trim(), "title": a[1].trim()})
          }
          break
        case 3:
          items.push({"attr": a[0].trim(), "path": a[1].trim(), "title": a[2].trim()})
          break
        default:
          items.push({"attr": a.shift().trim(), "path": a.shift().trim().trim(), "title": a.join('|').trim()})
          break
      }
    }
    
//    console.log("items",items)
    return items
  },
*/
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
  parseAttr(attr){
    let positional = attr.split(',')
    let positionalResult = []
    let namedResult = {}
    for (let i = 0; i < positional.length; i++){
      positional[i] = positional[i].trim()
      let nameAndValue = positional[i].split('=')
      if (nameAndValue.length == 2){

        // set this as named 
        namedResult[nameAndValue[0].trim()] = nameAndValue[1].trim()
      } else {
        // push to positional
        positionalResult.push(positional[i])
      }
    }
    /*
    positional.forEach(function(flaction){
      console.log("flaction",flaction)
      flaction = flaction.trim()
      console.log("flaction",flaction)
      let nameAndValue = flaction.split('=')
      if (nameAndValue.length == 2){
        named[nameAndValue[0].trim()] = nameAndValue[1].trim()
      }
    })*/

    return { positional: positionalResult, named: namedResult}
  }
}
