import {EncLst} from '../src/index.js'

describe('EncLst static methods', function () {
  test('makeURLfromCurrentURLandPath', function(){
//    let enclst = new EncLst()
    expect(EncLst.makeURLfromCurrentURLandPath("http://www.uedasoft.com/hello", "http://www.kerokero.com/hello")).toEqual("http://www.kerokero.com/hello")
    expect(EncLst.makeURLfromCurrentURLandPath("https://www.uedasoft.com/hello", "https://www.kerokero.com/hello")).toEqual("https://www.kerokero.com/hello")

    expect(EncLst.makeURLfromCurrentURLandPath("https://www.uedasoft.com/hello/hage", "/aho")).toEqual("https://www.uedasoft.com/aho")
    expect(EncLst.makeURLfromCurrentURLandPath("https://www.uedasoft.com/hello/hage", "aho")).toEqual("https://www.uedasoft.com/hello/aho")
    expect(EncLst.makeURLfromCurrentURLandPath("https://www.uedasoft.com/hello/hage", "./aho")).toEqual("https://www.uedasoft.com/hello/aho")
    expect(EncLst.makeURLfromCurrentURLandPath("https://www.uedasoft.com/hello/hage", "aho/boke")).toEqual("https://www.uedasoft.com/hello/aho/boke")
    expect(EncLst.makeURLfromCurrentURLandPath("https://www.uedasoft.com/hello/hage", "./aho/boke")).toEqual("https://www.uedasoft.com/hello/aho/boke")
    expect(EncLst.makeURLfromCurrentURLandPath("https://www.uedasoft.com/hello/hage", "../aho/boke")).toEqual("https://www.uedasoft.com/aho/boke")

    expect(EncLst.makeURLfromCurrentURLandPath("https://www.uedasoft.com/hello/hage/", "aho")).toEqual("https://www.uedasoft.com/hello/hage/aho")
    expect(EncLst.makeURLfromCurrentURLandPath("https://www.uedasoft.com/hello/hage/", "./aho")).toEqual("https://www.uedasoft.com/hello/hage/aho")
    expect(EncLst.makeURLfromCurrentURLandPath("https://www.uedasoft.com/hello/hage/", "aho/boke")).toEqual("https://www.uedasoft.com/hello/hage/aho/boke")
    expect(EncLst.makeURLfromCurrentURLandPath("https://www.uedasoft.com/hello/hage/", "./aho/boke")).toEqual("https://www.uedasoft.com/hello/hage/aho/boke")
    expect(EncLst.makeURLfromCurrentURLandPath("https://www.uedasoft.com/hello/hage/", "../aho/boke")).toEqual("https://www.uedasoft.com/hello/aho/boke")
    expect(EncLst.makeURLfromCurrentURLandPath("https://www.uedasoft.com/hello/hage/", "../../aho/boke")).toEqual("https://www.uedasoft.com/aho/boke")

    expect(EncLst.makeURLfromCurrentURLandPath("https://www.uedasoft.com/hello/hage/chibi/debu", "/aho", "https://www.uedasoft.com/hello/hage")).toEqual("https://www.uedasoft.com/hello/hage/aho")
    expect(EncLst.makeURLfromCurrentURLandPath("https://www.uedasoft.com/hello/hage/chibi/debu", "/aho", "https://www.uedasoft.com/hello/hage/")).toEqual("https://www.uedasoft.com/hello/hage/aho")
  })
})