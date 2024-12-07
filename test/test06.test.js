import {EncLst} from '../src/index.js'
require('isomorphic-fetch');

describe('EncLst Next Path', function () {
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

  test('makeURLfromCurrentURLandPath', async function(){
    let e1 =  await EncLst.createFromURL("http://www.uedasoft.com/hello")
    expect(e1.nextFilePath("http://www.kerokero.com/hello")).toEqual("http://www.kerokero.com/hello")
    expect(e1.nextFilePath("https://www.kerokero.com/hello")).toEqual("https://www.kerokero.com/hello")

//    let e2 = new EncLst()
//    await e2.readURL("https://www.uedasoft.com/hello/hage")
    let e2 = await EncLst.createFromURL("https://www.uedasoft.com/hello/hage")
    expect(e2.nextFilePath("/aho")).toEqual("https://www.uedasoft.com/aho")
    expect(e2.nextFilePath("aho")).toEqual("https://www.uedasoft.com/hello/aho")
    expect(e2.nextFilePath("./aho")).toEqual("https://www.uedasoft.com/hello/aho")
    expect(e2.nextFilePath("aho/boke")).toEqual("https://www.uedasoft.com/hello/aho/boke")
    expect(e2.nextFilePath("./aho/boke")).toEqual("https://www.uedasoft.com/hello/aho/boke")
    expect(e2.nextFilePath("../aho/boke")).toEqual("https://www.uedasoft.com/aho/boke")

    let e3 = await EncLst.createFromURL("https://www.uedasoft.com/hello/hage/")
    expect(e3.nextFilePath("aho")).toEqual("https://www.uedasoft.com/hello/hage/aho")
    expect(e3.nextFilePath("./aho")).toEqual("https://www.uedasoft.com/hello/hage/aho")
    expect(e3.nextFilePath("aho/boke")).toEqual("https://www.uedasoft.com/hello/hage/aho/boke")
    expect(e3.nextFilePath("./aho/boke")).toEqual("https://www.uedasoft.com/hello/hage/aho/boke")
    expect(e3.nextFilePath("../aho/boke")).toEqual("https://www.uedasoft.com/hello/aho/boke")
    expect(e3.nextFilePath("../../aho/boke")).toEqual("https://www.uedasoft.com/aho/boke")

    let e4 = await EncLst.createFromURL("https://www.uedasoft.com/hello/hage/chibi/debu")
    expect(e4.nextFilePath("/aho", "https://www.uedasoft.com/hello/hage")).toEqual("https://www.uedasoft.com/hello/hage/aho")
    expect(e4.nextFilePath("/aho", "https://www.uedasoft.com/hello/hage/")).toEqual("https://www.uedasoft.com/hello/hage/aho")
  })
})