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