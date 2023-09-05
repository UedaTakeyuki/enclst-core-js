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

  it('only attr', function(){
    console.log("items[0]", items[0])
    assert.equal(items[0].attr, 'a')
    assert.equal('path' in items[0], false)
    assert.equal('title' in items[0], false)
  })

});