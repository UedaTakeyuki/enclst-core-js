import {EncLst} from '../src/index.js'

let e = new EncLst()

describe('valuchecker test', function () {
  test('test isPath', () => {
    expect(e.isPath("http://ahoaho")).toBeTruthy()
    expect(e.isPath("https://ahoaho")).toBeTruthy()
    expect(e.isPath("ahoaho/boke")).toBeTruthy()
    expect(e.isPath("./ahoaho/boke")).toBeTruthy()
    expect(e.isPath("/ahoaho/boke")).toBeTruthy()
    expect(e.isPath("ahoahoboke")).toBeFalsy()
  });
  test('test isURL', () => {
    expect(e.isURL("http://ahoaho")).toBeTruthy()
    expect(e.isURL("https://ahoaho")).toBeTruthy()
    expect(e.isURL("ahoaho/boke")).toBeFalsy()
    expect(e.isURL("./ahoaho/boke")).toBeFalsy()
    expect(e.isURL("/ahoaho/boke")).toBeFalsy()
    expect(e.isURL("ahoahoboke")).toBeFalsy()
  });
  test("test isEnclst", () => {
    expect(e.isEnclst("aho.enclst")).toBeTruthy()
    expect(e.isEnclst('aho.enclist')).toBeFalsy()
  });
  test("test isYTcontentID", () => {
    expect(e.isYTcontentID("NiRIbKwAejk")).toBeTruthy()
    expect(e.isYTcontentID("NiRIbKwAejk0")).toBeFalsy()
    expect(e.isYTcontentID("NiRI.enclst")).toBeFalsy()
    expect(e.isYTcontentID("https://NiR")).toBeFalsy()
  });
  test("is isYTplaylistID", () => {
    expect(e.isYTplaylistID("PLA51C5154D20F440C")).toBeTruthy()
    expect(e.isYTplaylistID("PLQWzKIaERirwyaLCHXafULQs4In_FS2WA")).toBeTruthy()
    expect(e.isYTplaylistID("PLQWzKIaERirwyaLCHXafULQs4In_FS2WA0")).toBeFalsy()
    expect(e.isYTplaylistID("PLQWzKIaERirwyaLCHXafULQs4I.enclst")).toBeFalsy()
    expect(e.isYTplaylistID("https://PLQWzKIaERirwyaLCHXafULQs4")).toBeFalsy()
  });
});