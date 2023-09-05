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
    console.log("resArray", resArray)
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
    console.log("resArray", resArray)

    // remove title low
    if (resArray.length >= 2 && resArray[1] == ""){
      resArray.splice(0, 2) 
    }
    console.log("resArray", resArray)

    // set after the 3rd low to the items
    // const items = resArray.splice(2, resArray.length -2)
    let items = []

    // separate item to url and title and set to this.items
    for (const item of resArray){
      console.log("item", item)
      const a = item.split('|')
      console.log("a", a)
      items.push({"url": a[0].trim(), "title": a[1].trim()})
    }
    
    console.log("items",items)
    return items
  }
}
