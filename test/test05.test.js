import {Item} from '../src/index.js'

describe('Create test', function () {
  test('create Attr of created Item', async function(){
    let item = new Item()

    // initially attr is blank
    expect(item.attr.hasParams() ).toEqual(false)

    // push a param to positional
    item.attr.positional.push("aho")
    expect(item.attr.hasParams() ).toEqual(true)
    expect(item.attr.hasNamedParams()).toEqual(false)
    expect(item.attr.positional.length).toEqual(1)
    expect(item.attr.positional[0]).toEqual("aho")
    expect(item.attr.hasPositinalParams()).toEqual(true)

    // set a param to named
    item.attr.named["aho"]="1"
    expect(item.attr.named["aho"]).toEqual("1")
    expect(item.attr.hasNamedParams()).toEqual(true)
  })
})