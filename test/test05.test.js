import {Item, EncLst} from '../src/index.js'

describe('Create test', function () {
  test('create value of created Item', async function(){
    let item = new Item()
    let enclst = new EncLst()

    // confirm both item & enclst are blank
    expect(item.serialize()).toEqual("|")
    expect(enclst.serialize()).toEqual("")    
    enclst.items.push(item)
    expect(enclst.serialize()).toEqual("|")    

    // initially value is blank
    expect(item.value.hasParams() ).toEqual(false)
    expect(item.value.serialize()).toEqual("")

    // push a param to positional
    item.value.positional.push("aho")
    expect(item.value.hasParams() ).toEqual(true)
    expect(item.value.hasNamedParams()).toEqual(false)
    expect(item.value.positional.length).toEqual(1)
    expect(item.value.positional[0]).toEqual("aho")
    expect(item.value.hasPositinalParams()).toEqual(true)
    expect(Object.keys(item.value.named).length).toEqual(0)
    expect(item.value.serialize()).toEqual("aho")
    expect(enclst.serialize()).toEqual("aho|")

    // set a param to named
    item.value.named["aho"]="1"
    expect(item.value.named["aho"]).toEqual("1")
    expect(item.value.hasNamedParams()).toEqual(true)
    expect(Object.keys(item.value.named).length).toEqual(1)
    expect(item.value.serialize()).toEqual("aho,aho=1")
    expect(enclst.serialize()).toEqual("aho,aho=1|")

    // push the other param to positional
    item.value.positional.push("baka")
    expect(enclst.serialize()).toEqual("aho,baka,aho=1|")

    // push the other param to named
    item.value.named["baka"]="2"
    expect(enclst.serialize()).toEqual("aho,baka,aho=1,baka=2|")
  })

  test('create EncLst', async function(){
    let enclst = new EncLst()
    let item1 = new Item("aho|")
    let item2 = new Item("baka|.boke|kasu")
    enclst.items.push(item1, item2)
    expect(enclst.serialize()).toEqual(`aho|\nbaka|.boke|kasu`)
    enclst.title = "kerokero"
    expect(enclst.serialize()).toEqual(`kerokero\n\naho|\nbaka|.boke|kasu`)
  })

})