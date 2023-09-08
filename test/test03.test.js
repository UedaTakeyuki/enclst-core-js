var assert = require('assert');
import enclstcore from '../src/index.js'
import * as fs from "node:fs/promises";

//let file = await (async function(){return await fs.readFile('test/data/test01.enclst', { encoding: "utf8" })}())
let file
let resArray
let items
//console.log("file", file)

describe('getListItems test', function () {
  test('read file collectlly', async function(){
    file = await fs.readFile('test/data/test03.enclst', { encoding: "utf8" })
    resArray = enclstcore.stringToResArray(file)
    items = enclstcore.getListItems(resArray)
    expect(items[0].attr).toBe('a');
//      console.log("file", file)
  })

  test('a', function(){
    let posAndNamed = enclstcore.parseAttr(items[0].attr)
    let pos = posAndNamed.positional
    let named = posAndNamed.named
    expect(pos.length).toBe(1)
  })
});
