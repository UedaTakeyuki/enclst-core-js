// enclstcore.getListItems is obsoleted
//
// 

var assert = require('assert');
import enclstcore from '../src/index.js'
import * as fs from "node:fs/promises";

//let file = await (async function(){return await fs.readFile('test/data/test01.enclst', { encoding: "utf8" })}())
let file
let resArray
let items
//console.log("file", file)

describe('getListItems test', function () {
  it('read file collectlly', async function(){
    file = await fs.readFile('test/data/test02.enclst', { encoding: "utf8" })
    resArray = enclstcore.stringToResArray(file)
    items = enclstcore.getListItems(resArray)
//      console.log("file", file)
  });

  describe('1 item', function () {
    it('a', function(){
      console.log("items[0]", items[0])
      assert.equal(items[0].attr, 'a')
      assert.equal('path' in items[0], false)
      assert.equal('title' in items[0], false)
    })

    it('http://uedasoft.com', function(){
      console.log("items[1]", items[1])
      assert.equal('attr' in items[1], false)
      assert.equal(items[1].path, 'http://uedasoft.com')
      assert.equal('title' in items[1], false)
    })

    it('https://uedasoft.com', function(){
      console.log("items[2]", items[2])
      assert.equal('attr' in items[2], false)
      assert.equal(items[2].path, 'https://uedasoft.com')
      assert.equal('title' in items[2], false)
    })
    
    it('file://uedasoft', function(){
      console.log("items[3]", items[3])
      assert.equal('attr' in items[3], false)
      assert.equal(items[3].path, 'file://uedasoft')
      assert.equal('title' in items[3], false)
    })

    it('/abc', function(){
      console.log("items[4]", items[4])
      assert.equal('attr' in items[4], false)
      assert.equal(items[4].path, '/abc')
      assert.equal('title' in items[4], false)
    })

    it('./abc', function(){
      console.log("items[5]", items[5])
      assert.equal('attr' in items[5], false)
      assert.equal(items[5].path, './abc')
      assert.equal('title' in items[5], false)
    })

    it('abc/deb', function(){
      console.log("items[6]", items[6])
      assert.equal('attr' in items[6], false)
      assert.equal(items[6].path, 'abc/deb')
      assert.equal('title' in items[6], false)
    })
  });

  describe('2 items', function () {
    it('a | a', function(){
      console.log("items[7]", items[7])
      assert.equal(items[7].attr, 'a')
      assert.equal('path' in items[7], false)
      assert.equal(items[7].title, 'a')
    })

    it('http://uedasoft.com | a', function(){
      console.log("items[8]", items[8])
      assert.equal('attr' in items[8], false)
      assert.equal(items[8].path, 'http://uedasoft.com')
      assert.equal(items[8].title, 'a')
    })

    it('https://uedasoft.com | a', function(){
      console.log("items[9]", items[9])
      assert.equal('attr' in items[9], false)
      assert.equal(items[9].path, 'https://uedasoft.com')
      assert.equal(items[9].title, 'a')
    })
    
    it('file://uedasoft | a', function(){
      console.log("items[10]", items[10])
      assert.equal('attr' in items[10], false)
      assert.equal(items[10].path, 'file://uedasoft')
      assert.equal(items[10].title, 'a')
    })

    it('/abc | a', function(){
      console.log("items[11]", items[11])
      assert.equal('attr' in items[11], false)
      assert.equal(items[11].path, '/abc')
      assert.equal(items[11].title, 'a')
    })

    it('./abc | a', function(){
      console.log("items[12]", items[12])
      assert.equal('attr' in items[12], false)
      assert.equal(items[12].path, './abc')
      assert.equal(items[12].title, 'a')
    })

    it('abc/deb | a', function(){
      console.log("items[13]", items[13])
      assert.equal('attr' in items[13], false)
      assert.equal(items[13].path, 'abc/deb')
      assert.equal(items[13].title, 'a')
    })
  });

  describe('3 items or more', function () {
    it('a | b | c', function(){
      console.log("items[14]", items[14])
      assert.equal(items[14].attr, 'a')
      assert.equal(items[14].path, 'b')
      assert.equal(items[14].title, 'c')
    })

    it('a | b | c | d', function(){
      console.log("items[15]", items[15])
      assert.equal(items[15].attr, 'a')
      assert.equal(items[15].path, 'b')
      assert.equal(items[15].title, 'c | d')
    })

    it('a | b | c | d | e', function(){
      console.log("items[16]", items[16])
      assert.equal(items[16].attr, 'a')
      assert.equal(items[16].path, 'b')
      assert.equal(items[16].title, 'c | d | e')
    })
  });
});