var assert = require('assert');
import enclstcore from '../src/index.js'
import * as fs from "node:fs/promises";

//let file = await (async function(){return await fs.readFile('test/data/test01.enclst', { encoding: "utf8" })}())
let file
let resArray
//console.log("file", file)

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1)
    })

    it('read file collectlly', async function(){
      file = await fs.readFile('test/data/test01.enclst', { encoding: "utf8" })
//      console.log("file", file)
    });

    it('stringToResArray', function(){
      resArray = enclstcore.stringToResArray(file)
      assert.equal(resArray.length, 80);
    })

    it('getTitle', function(){
      assert.equal(enclstcore.getTitle(resArray), 'Animaux à Adopter')
    })

    it('getListItems', function(){
      let items = enclstcore.getListItems(resArray)
      console.log("items[0]", items[0])
    })

  });
});