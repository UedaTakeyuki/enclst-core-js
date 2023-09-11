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
    it('a', function(){
      let item = items[Counter++]
      console.log("item", item)
      assert.equal(item.attr().positional[0], 'a')
      assert.equal(item.path(), "")
      assert.equal(item.title(), "")
    })

    it('http://uedasoft.com', function(){
      let item = items[Counter++]
      console.log("item", item)
      assert.equal('attr' in item, false)
      assert.equal(item.path, 'http://uedasoft.com')
      assert.equal('title' in item, false)
    })

    it('https://uedasoft.com', function(){
      let item = items[Counter++]
      console.log("item", item)
      assert.equal('attr' in item, false)
      assert.equal(item.path, 'https://uedasoft.com')
      assert.equal('title' in item, false)
    })
    
    it('file://uedasoft', function(){
      let item = items[Counter++]
      console.log("item", item)
      assert.equal('attr' in item, false)
      assert.equal(item.path, 'file://uedasoft')
      assert.equal('title' in item, false)
    })

    it('/abc', function(){
      let item = items[Counter++]
      console.log("item", item)
      assert.equal('attr' in item, false)
      assert.equal(item.path, '/abc')
      assert.equal('title' in item, false)
    })

    it('./abc', function(){
      let item = items[Counter++]
      console.log("item", item)
      assert.equal('attr' in item, false)
      assert.equal(item.path, './abc')
      assert.equal('title' in item, false)
    })

    it('abc/deb', function(){
      let item = items[Counter++]
      console.log("item", item)
      assert.equal('attr' in item, false)
      assert.equal(item.path, 'abc/deb')
      assert.equal('title' in item, false)
    })
  });

  describe('2 items', function () {
    it('a | a', function(){
      let item = items[Counter++]
      console.log("item", item)
      assert.equal(item.attr, 'a')
      assert.equal('path' in item, false)
      assert.equal(item.title, 'a')
    })

    it('http://uedasoft.com | a', function(){
      let item = items[Counter++]
      console.log("item", item)
      assert.equal('attr' in item, false)
      assert.equal(item.path, 'http://uedasoft.com')
      assert.equal(item.title, 'a')
    })

    it('https://uedasoft.com | a', function(){
      let item = items[Counter++]
      console.log("item", item)
      assert.equal('attr' in item, false)
      assert.equal(item.path, 'https://uedasoft.com')
      assert.equal(item.title, 'a')
    })
    
    it('file://uedasoft | a', function(){
      let item = items[Counter++]
      console.log("item", item)
      assert.equal('attr' in item, false)
      assert.equal(item.path, 'file://uedasoft')
      assert.equal(item.title, 'a')
    })

    it('/abc | a', function(){
      let item = items[Counter++]
      console.log("item", item)
      assert.equal('attr' in item, false)
      assert.equal(items[11].path, '/abc')
      assert.equal(items[11].title, 'a')
    })

    it('./abc | a', function(){
      let item = items[Counter++]
      console.log("item", item)
      assert.equal('attr' in items[12], false)
      assert.equal(items[12].path, './abc')
      assert.equal(items[12].title, 'a')
    })

    it('abc/deb | a', function(){
      let item = items[Counter++]
      console.log("item", item)
      assert.equal('attr' in items[13], false)
      assert.equal(items[13].path, 'abc/deb')
      assert.equal(items[13].title, 'a')
    })
  });

  describe('3 items or more', function () {
    it('a | b | c', function(){
      let item = items[Counter++]
      console.log("item", item)
      assert.equal(items[14].attr, 'a')
      assert.equal(items[14].path, 'b')
      assert.equal(items[14].title, 'c')
    })

    it('a | b | c | d', function(){
      let item = items[Counter++]
      console.log("item", item)
      assert.equal(items[15].attr, 'a')
      assert.equal(items[15].path, 'b')
      assert.equal(items[15].title, 'c | d')
    })

    it('a | b | c | d | e', function(){
      let item = items[Counter++]
      console.log("item", item)
      assert.equal(items[16].attr, 'a')
      assert.equal(items[16].path, 'b')
      assert.equal(items[16].title, 'c | d | e')
    })
  });
});