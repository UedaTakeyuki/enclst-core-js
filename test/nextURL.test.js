//import {EncLst} from '../src/enclst.js'
import { EncLst} from '../src/index.js'

describe('enclst test', function () {
  test('test nextURL', () => {
    let e = new EncLst()
    e.filepath = 'https://raw.githubusercontent.com/UedaTakeyuki/HS2playlist/refs/heads/main/wagner/Theater/menu.enclst'
    expect(e.filepath).toEqual(
          'https://raw.githubusercontent.com/UedaTakeyuki/HS2playlist/refs/heads/main/wagner/Theater/menu.enclst');
    expect(e.nextFilePath("Deutschland/menu.enclst")).toEqual(
          "https://raw.githubusercontent.com/UedaTakeyuki/HS2playlist/refs/heads/main/wagner/Theater/Deutschland/menu.enclst");
    expect(e.nextFilePath("/Deutschland/menu.enclst")).toEqual(
          "https://raw.githubusercontent.com/Deutschland/menu.enclst");
    expect(
          e.nextFilePath("/Deutschland/menu.enclst",
              "https://raw.githubusercontent.com/UedaTakeyuki/")).toEqual(
          "https://raw.githubusercontent.com/UedaTakeyuki/Deutschland/menu.enclst");
    expect(
          e.nextFilePath("/Deutschland/menu.enclst",
              "https://raw.githubusercontent.com/UedaTakeyuki")).toEqual(
          "https://raw.githubusercontent.com/UedaTakeyuki/Deutschland/menu.enclst");
    expect(
        e.nextFilePath("https://raw.githubusercontent.com/UedaTakeyuki/HS2playlist/refs/heads/main/wagner/menu")).toEqual(
        "https://raw.githubusercontent.com/UedaTakeyuki/HS2playlist/refs/heads/main/wagner/menu");
    expect(
        e.nextFilePath("https://raw.githubusercontent.com/UedaTakeyuki/HS2playlist/refs/heads/main/wagner/menu",
            "https://raw.githubusercontent.com/UedaTakeyuki")).toEqual(
        "https://raw.githubusercontent.com/UedaTakeyuki/HS2playlist/refs/heads/main/wagner/menu");
    });
  
  /*
    test('test nextEnclst', async () => {
      try{
        let e = await EncLst.createFromURL(  'https://raw.githubusercontent.com/UedaTakeyuki/HS2playlist/refs/heads/main/wagner/Theater/menu.enclst');
        expect(e.filePath.filepath).toEqual(
            'https://raw.githubusercontent.com/UedaTakeyuki/HS2playlist/refs/heads/main/wagner/Theater/menu.enclst');
        expect(await e.nextEnclst("Deutschland/menu.enclst").filePath.filepath).toEqual(
            "https://raw.githubusercontent.com/UedaTakeyuki/HS2playlist/refs/heads/main/wagner/Theater/Deutschland/menu.enclst");
        expect(await e.nextEnclst("/Deutschland/menu.enclst").filePath.filepath).toEqual(
            "https://raw.githubusercontent.com/Deutschland/menu.enclst");
        expect(
            e.nextEnclst("/Deutschland/menu.enclst",
                "https://raw.githubusercontent.com/UedaTakeyuki/").filePath.filepath).toEqual(
            "https://raw.githubusercontent.com/UedaTakeyuki/Deutschland/menu.enclst");
        expect(
            await e.nextEnclst("/Deutschland/menu.enclst",
                "https://raw.githubusercontent.com/UedaTakeyuki").filePath.filepath).toEqual(
            "https://raw.githubusercontent.com/UedaTakeyuki/Deutschland/menu.enclst");
      } catch(e) {
        console.log(e)
      }
    })
  */
  })