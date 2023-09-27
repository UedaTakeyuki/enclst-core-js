import {Item, EncLst} from '../src/index.js'

describe('Create test', function () {
  test('create Attr of created Item', async function(){
    let item = new Item()
    let enclst = new EncLst()

    // confirm both item & enclst are blank
    expect(item.serialize()).toEqual("||")
    expect(enclst.serialize()).toEqual("")    
    enclst.items.push(item)
    expect(enclst.serialize()).toEqual("||")    

    // initially attr is blank
    expect(item.attr.hasParams() ).toEqual(false)
    expect(item.attr.serialize()).toEqual("")

    // push a param to positional
    item.attr.positional.push("aho")
    expect(item.attr.hasParams() ).toEqual(true)
    expect(item.attr.hasNamedParams()).toEqual(false)
    expect(item.attr.positional.length).toEqual(1)
    expect(item.attr.positional[0]).toEqual("aho")
    expect(item.attr.hasPositinalParams()).toEqual(true)
    expect(Object.keys(item.attr.named).length).toEqual(0)
    expect(item.attr.serialize()).toEqual("aho")
    expect(enclst.serialize()).toEqual("aho||")

    // set a param to named
    item.attr.named["aho"]="1"
    expect(item.attr.named["aho"]).toEqual("1")
    expect(item.attr.hasNamedParams()).toEqual(true)
    expect(Object.keys(item.attr.named).length).toEqual(1)
    expect(item.attr.serialize()).toEqual("aho,aho=1")
  })
})