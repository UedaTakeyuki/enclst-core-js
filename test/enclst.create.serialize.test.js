import {EncLst} from '../src/index.js'

describe('EncLst Create and Serialize', function () {
  let e = new EncLst()
  test('Create', function(){
    // confirm e is blank
    expect(e.title).toEqual("")
    expect(e.items.length).toEqual(0)
  })
})