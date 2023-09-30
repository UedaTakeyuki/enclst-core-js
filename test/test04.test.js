import {EncLst} from '../src/index.js'
import * as fs from "node:fs/promises";

let items
let Counter = 0

describe('getListItems test', function () {
  test('read file collectlly', async function(){
    let str = await fs.readFile('test/data/test02.enclst', { encoding: "utf8" })
    let enclst  = new EncLst(str)
    console.log("enclst", enclst)
    items = enclst.items
//      console.log("file", file)
  });

  describe('1 item', function () {
    test('a', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect(item.value.serialize()).toEqual('a')
      expect(item.value.positional[0]).toEqual('a')
      expect(item.value.positional.length).toEqual(1)
      expect(item.value.hasParams()).toEqual(true)
      expect(item.value.hasPositinalParams()).toEqual(true)
      expect(item.value.hasNamedParams()).toEqual(false)
      expect(item.title).toEqual("")
    })

    test('http://uedasoft.com', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect(item.value.serialize()).toEqual('http://uedasoft.com')
      expect(item.value.hasParams()).toEqual(true)
      expect(item.value.hasPositinalParams()).toEqual(true)
      expect(item.value.hasNamedParams()).toEqual(false)
      expect(item.value.positional[0]).toEqual('http://uedasoft.com')
      expect(item.value.positional.length).toEqual(1)
      expect(item.title).toEqual("")
    })

    test('https://uedasoft.com', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect(item.value.serialize()).toEqual('https://uedasoft.com')
      expect(item.value.hasParams()).toEqual(true)
      expect(item.value.hasPositinalParams()).toEqual(true)
      expect(item.value.hasNamedParams()).toEqual(false)
      expect(item.value.positional[0]).toEqual('https://uedasoft.com')
      expect(item.value.positional.length).toEqual(1)
      expect(item.title).toEqual("")
    })
    
    test('file://uedasoft', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect(item.value.serialize()).toEqual('file://uedasoft')
      expect(item.value.hasParams()).toEqual(true)
      expect(item.value.hasPositinalParams()).toEqual(true)
      expect(item.value.hasNamedParams()).toEqual(false)
      expect(item.value.positional[0]).toEqual('file://uedasoft')
      expect(item.value.positional.length).toEqual(1)
      expect(item.title).toEqual("")
    })

    test('/abc', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect(item.value.serialize()).toEqual('/abc')
      expect(item.value.hasParams()).toEqual(true)
      expect(item.value.hasPositinalParams()).toEqual(true)
      expect(item.value.hasNamedParams()).toEqual(false)
      expect(item.value.positional[0]).toEqual('/abc')
      expect(item.value.positional.length).toEqual(1)
      expect(item.title).toEqual("")
    })

    test('./abc', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect(item.value.serialize()).toEqual('./abc')
      expect(item.value.hasParams()).toEqual(true)
      expect(item.value.hasPositinalParams()).toEqual(true)
      expect(item.value.hasNamedParams()).toEqual(false)
      expect(item.value.positional[0]).toEqual('./abc')
      expect(item.value.positional.length).toEqual(1)
      expect(item.title).toEqual("")
    })

    test('abc/deb', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect(item.value.serialize()).toEqual('abc/deb')
      expect(item.value.hasParams()).toEqual(true)
      expect(item.value.hasPositinalParams()).toEqual(true)
      expect(item.value.hasNamedParams()).toEqual(false)
      expect(item.value.positional[0]).toEqual('abc/deb')
      expect(item.value.positional.length).toEqual(1)
      expect(item.title).toEqual("")
    })
  });

  describe('2 items', function () {
    test('a | a', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect(item.value.serialize()).toEqual('a')
      expect(item.value.hasParams()).toEqual(true)
      expect(item.value.hasPositinalParams()).toEqual(true)
      expect(item.value.hasNamedParams()).toEqual(false)
      expect(item.value.positional[0]).toEqual('a')
      expect(item.value.positional.length).toEqual(1)
      expect(item.title).toEqual("a")
    })
  });

  describe('3 items or more', function () {
    test('a | b | c', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect(item.value.serialize()).toEqual('a')
      expect(item.value.hasParams()).toEqual(true)
      expect(item.value.hasPositinalParams()).toEqual(true)
      expect(item.value.hasNamedParams()).toEqual(false)
      expect(item.value.positional[0]).toEqual('a')
      expect(item.value.positional.length).toEqual(1)
      expect(item.title).toEqual("b | c")
    })

    test('a | b | c | d', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect(item.value.serialize()).toEqual('a')
      expect(item.value.hasParams()).toEqual(true)
      expect(item.value.hasPositinalParams()).toEqual(true)
      expect(item.value.hasNamedParams()).toEqual(false)
      expect(item.value.positional[0]).toEqual('a')
      expect(item.value.positional.length).toEqual(1)
      expect(item.title).toEqual("b | c | d")
    })
  });
});