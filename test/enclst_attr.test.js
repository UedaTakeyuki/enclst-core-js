import { EncLst} from '../src/index.js'
require('isomorphic-fetch');

describe('test timetable', function () {
  test('a timetable', async () => {
    let enclst = await EncLst.createFromURL(
      'https://raw.githubusercontent.com/UedaTakeyuki/EncLst/refs/heads/main/examples/TimeTables/Ooimachi-line/mizonokuchiWeekday4Ooimach.enclst');
    let items = enclst.items;
//    expect(enclst.value.first(), "enclst_type=timetable");
//    expect(enclst.value.namedValues["enclst_type"], "timetable");
/*
    expect(enclst.title).toEqual("平日）溝の口駅 大井町方面");
    expect(items[0].title).toEqual("5時7分発 各停（二子新地・高津停車） 大井町行き");
    expect(items[0].value.first()).toEqual("0507");
*/
  })
})
