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
})
