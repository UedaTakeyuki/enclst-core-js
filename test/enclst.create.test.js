import {EncLst} from '../src/index.js'

describe('EncLst Create and Serialize', function () {
  let e = new EncLst()
  let serializedEncLst = ""

  test('Create', function(){
    // confirm e is blank
    expect(e.title).toEqual("")
    expect(e.items.length).toEqual(0)

    // add title
    e.title = "home"
    expect(e.title).toEqual("home")

    // push item
    e.pushItem("https://raw.githubusercontent.com/UedaTakeyuki/EncLst/refs/heads/main/examples/TimeTables/Ooimachi-line/mizonokuchiWeekday4Ooimach.enclst | 大井町")
    let item = e.pushItem()
    item.title = "en"
    item.value.positionalValues.push("https://raw.githubusercontent.com/UedaTakeyuki/EncLst/refs/heads/main/examples/EncycloList/lang/en/en.enclst")
    item = e.unshiftItem("| ja")
    item.value.positionalValues.unshift("https://raw.githubusercontent.com/UedaTakeyuki/EncLst/refs/heads/main/examples/EncycloList/lang/ja/ja.enclst")    

    // confirm pushed and unshifted items
    item = e.items[0]
    expect(item.title).toEqual("ja")
    expect(item.value.first()).toEqual("https://raw.githubusercontent.com/UedaTakeyuki/EncLst/refs/heads/main/examples/EncycloList/lang/ja/ja.enclst")
    item = e.items[1]
    expect(item.title).toEqual("大井町")
    expect(item.value.first()).toEqual("https://raw.githubusercontent.com/UedaTakeyuki/EncLst/refs/heads/main/examples/TimeTables/Ooimachi-line/mizonokuchiWeekday4Ooimach.enclst")
    item = e.items[2]
    expect(item.title).toEqual("en")
    expect(item.value.first()).toEqual("https://raw.githubusercontent.com/UedaTakeyuki/EncLst/refs/heads/main/examples/EncycloList/lang/en/en.enclst")
  
  })

  test('Serialize', function(){
    serializedEncLst = e.serialize()
    console.log("serialized", serializedEncLst)
    let e1 = new EncLst(serializedEncLst)
    expect(e.title).toEqual(e1.title)
    for (let i=0; i < e.items.length; i++){
      expect(e.items[i].title).toEqual(e1.items[i].title)
      expect(e.items[i].value.first()).toEqual(e1.items[i].value.first())
    }
  })

})