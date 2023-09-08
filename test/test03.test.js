var assert = require('assert');
import enclstcore from '../src/index.js'
import * as fs from "node:fs/promises";

//let file = await (async function(){return await fs.readFile('test/data/test01.enclst', { encoding: "utf8" })}())
let file
let resArray
let items
let Counter = 0
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
    let posAndNamed = enclstcore.parseAttr(items[Counter++].attr)
    let pos = posAndNamed.positional
    let named = posAndNamed.named
    expect(pos.length).toBe(1)
    expect(pos[0]).toBe('a')
    expect(Object.keys(named).length).toBe(0)
  })

  test('a, b', function(){
    let posAndNamed = enclstcore.parseAttr(items[Counter++].attr)
    let pos = posAndNamed.positional
    let named = posAndNamed.named
    expect(pos.length).toBe(2)
    expect(pos[0]).toBe('a')
    expect(pos[1]).toBe('b')
    expect(Object.keys(named).length).toBe(0)
  })

  test('a , b , c', function(){
    let posAndNamed = enclstcore.parseAttr(items[Counter++].attr)
    let pos = posAndNamed.positional
    let named = posAndNamed.named
    expect(pos.length).toBe(3)
    expect(pos[0]).toBe('a')
    expect(pos[1]).toBe('b')
    expect(pos[2]).toBe('c')
    expect(Object.keys(named).length).toBe(0)
  })

  test('a=1', function(){
    let posAndNamed = enclstcore.parseAttr(items[Counter++].attr)
    let pos = posAndNamed.positional
    let named = posAndNamed.named
    expect(pos.length).toBe(0)
    expect(Object.keys(named).length).toBe(1)
    expect(named.a).toBe('1')
  })

  test('a=1, b = c, d  =  e', function(){
    let posAndNamed = enclstcore.parseAttr(items[Counter++].attr)
    let pos = posAndNamed.positional
    let named = posAndNamed.named
    expect(pos.length).toBe(1)
    expect(pos[0]).toBe('a')
    expect(Object.keys(named).length).toBe(0)
  })

  test('a, b=1, c, d=2', function(){
    let posAndNamed = enclstcore.parseAttr(items[Counter++].attr)
    let pos = posAndNamed.positional
    let named = posAndNamed.named
    expect(pos.length).toBe(1)
    expect(pos[0]).toBe('a')
    expect(Object.keys(named).length).toBe(0)
  })

});
