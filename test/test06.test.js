import {EncLst} from '../src/index.js'

describe('EncLst helpers', function () {
  test('makeURLfromCurrentURLandPath', function(){
    let enclst = new EncLst()
    expect(enclst.makeURLfromCurrentURLandPath("http://www.uedasoft.com/hello", "http://www.kerokero.com/hello")).toEqual("http://www.kerokero.com/hello")
    expect(enclst.makeURLfromCurrentURLandPath("https://www.uedasoft.com/hello", "https://www.kerokero.com/hello")).toEqual("https://www.kerokero.com/hello")
    expect(enclst.makeURLfromCurrentURLandPath("https://www.uedasoft.com/hello/hage", "/aho")).toEqual("https://www.uedasoft.com/aho")
    expect(enclst.makeURLfromCurrentURLandPath("https://www.uedasoft.com/hello/hage", "aho")).toEqual("https://www.uedasoft.com/hello/aho")
    expect(enclst.makeURLfromCurrentURLandPath("https://www.uedasoft.com/hello/hage", "./aho")).toEqual("https://www.uedasoft.com/hello/aho")
    expect(enclst.makeURLfromCurrentURLandPath("https://www.uedasoft.com/hello/hage", "aho/boke")).toEqual("https://www.uedasoft.com/hello/aho/boke")
    expect(enclst.makeURLfromCurrentURLandPath("https://www.uedasoft.com/hello/hage", "./aho/boke")).toEqual("https://www.uedasoft.com/hello/aho/boke")
    expect(enclst.makeURLfromCurrentURLandPath("https://www.uedasoft.com/hello/hage", "../aho/boke")).toEqual("https://www.uedasoft.com/aho/boke")
  })
})