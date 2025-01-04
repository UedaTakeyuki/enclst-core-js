import {Value} from '../src/index.js'

describe('Positional Value test', function () {
  test('Blank value', function(){
    const value = new Value()
    expect(value.hasPositinalValues()).toEqual(false)
    expect(value.first()).toEqual("")
    expect(value.last()).toEqual("")
    expect(value.isIn("49")).toEqual(false)
    expect(value.isInAsSubStr("下田")).toEqual(false)
  })
  test('Not Blank', function(){
    const value = new Value("7,49,運転日注意,伊東行き豆急下田行き,踊り子,特急")
    expect(value.hasPositinalValues()).toEqual(true)
    expect(value.first()).toEqual("7")
    expect(value.last()).toEqual("特急")
    expect(value.isIn("49")).toEqual(false)
    expect(value.isInAsSubStr("下田")).toEqual(false)
  })
})
