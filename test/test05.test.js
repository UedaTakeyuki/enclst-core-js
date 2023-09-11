var assert = require('assert');
import * as el from '../src/index.js'
import * as fs from "node:fs/promises";

var assert = require('assert');

//let file = await (async function(){return await fs.readFile('test/data/test01.enclst', { encoding: "utf8" })}())
let items
let Counter = 0
//console.log("file", file)

describe('getListItems test', function () {
  it('read file collectlly', async function(){
    let str = await fs.readFile('test/data/test02.enclst', { encoding: "utf8" })
    let enclst  = new el.EncLst(str)
    console.log("enclst", enclst)
    items = enclst.items()
//      console.log("file", file)
  });

  describe('1 item', function () {
    test('a', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect(item.attr.serialize()).toEqual('a')
      expect(item.attr.positional[0]).toEqual('a')
      expect(item.attr.positional.length).toEqual(1)
      expect(item.attr.hasParams()).toEqual(true)
      expect(item.attr.hasPositinalParams()).toEqual(true)
      expect(item.attr.hasNamedParams()).toEqual(false)  
      expect(item.path).toEqual("")
      expect(item.title).toEqual("")
    })

    test('http://uedasoft.com', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect(item.attr.serialize()).toEqual('')
      expect(item.attr.hasParams()).toEqual(false)
      expect(item.path).toEqual('http://uedasoft.com')
      expect(item.title).toEqual("")
    })

    it('https://uedasoft.com', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect('attr' in item).toEqual(false)
      expect(item.path).toEqual('https://uedasoft.com')
      expect('title' in item).toEqual(false)
    })
    
    it('file://uedasoft', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect('attr' in item).toEqual(false)
      expect(item.path).toEqual('file://uedasoft')
      expect('title' in item).toEqual(false)
    })

    it('/abc', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect('attr' in item).toEqual(false)
      expect(item.path).toEqual('/abc')
      expect('title' in item).toEqual(false)
    })

    it('./abc', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect('attr' in item).toEqual(false)
      expect(item.path).toEqual('./abc')
      expect('title' in item).toEqual(false)
    })

    it('abc/deb', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect('attr' in item).toEqual(false)
      expect(item.path).toEqual('abc/deb')
      expect('title' in item).toEqual(false)
    })
  });

  describe('2 items', function () {
    it('a | a', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect(item.attr).toEqual('a')
      expect('path' in item).toEqual(false)
      expect(item.title).toEqual('a')
    })

    it('http://uedasoft.com | a', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect('attr' in item).toEqual(false)
      expect(item.path).toEqual('http://uedasoft.com')
      expect(item.title).toEqual('a')
    })

    it('https://uedasoft.com | a', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect('attr' in item).toEqual(false)
      expect(item.path).toEqual('https://uedasoft.com')
      expect(item.title).toEqual('a')
    })
    
    it('file://uedasoft | a', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect('attr' in item).toEqual(false)
      expect(item.path).toEqual('file://uedasoft')
      expect(item.title).toEqual('a')
    })

    it('/abc | a', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect('attr' in item).toEqual(false)
      expect(items[11].path).toEqual('/abc')
      expect(items[11].title).toEqual('a')
    })

    it('./abc | a', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect('attr' in items[12]).toEqual(false)
      expect(items[12].path).toEqual('./abc')
      expect(items[12].title).toEqual('a')
    })

    it('abc/deb | a', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect('attr' in items[13]).toEqual(false)
      expect(items[13].path).toEqual('abc/deb')
      expect(items[13].title).toEqual('a')
    })
  });

  describe('3 items or more', function () {
    it('a | b | c', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect(items[14].attr).toEqual('a')
      expect(items[14].path).toEqual('b')
      expect(items[14].title).toEqual('c')
    })

    it('a | b | c | d', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect(items[15].attr).toEqual('a')
      expect(items[15].path).toEqual('b')
      expect(items[15].title).toEqual('c | d')
    })

    it('a | b | c | d | e', function(){
      let item = items[Counter++]
      console.log("item", item)
      expect(items[16].attr).toEqual('a')
      expect(items[16].path).toEqual('b')
      expect(items[16].title).toEqual('c | d | e')
    })
  });
});