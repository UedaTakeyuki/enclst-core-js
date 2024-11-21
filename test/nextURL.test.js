import {EncLst} from '../src/enclst.js'
import {FilePath} from '../src/filepath.js'

let f = new FilePath(
  'https://raw.githubusercontent.com/UedaTakeyuki/HS2playlist/refs/heads/main/wagner/Theater/menu.enclst');

describe('filepath test', function () {
  test('test nextURL', () => {
  expect(f.filepath).toEqual(
      'https://raw.githubusercontent.com/UedaTakeyuki/HS2playlist/refs/heads/main/wagner/Theater/menu.enclst');
  expect(f.nextFilePath("Deutschland/menu.enclst")).toEqual(
      "https://raw.githubusercontent.com/UedaTakeyuki/HS2playlist/refs/heads/main/wagner/Theater/Deutschland/menu.enclst");
  expect(f.nextFilePath("/Deutschland/menu.enclst")).toEqual(
      "https://raw.githubusercontent.com/Deutschland/menu.enclst");
  expect(
      f.nextFilePath("/Deutschland/menu.enclst",
          "https://raw.githubusercontent.com/UedaTakeyuki/")).toEqual(
      "https://raw.githubusercontent.com/UedaTakeyuki/Deutschland/menu.enclst");
  expect(
      f.nextFilePath("/Deutschland/menu.enclst",
          "https://raw.githubusercontent.com/UedaTakeyuki")).toEqual(
      "https://raw.githubusercontent.com/UedaTakeyuki/Deutschland/menu.enclst");
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