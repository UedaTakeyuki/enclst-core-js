# Enclist-core-js
This is a library for javascript to handle [Enclst](https://github.com/UedaTakeyuki/EncLst) data.

# install
```
yarn add enclst-core-js
```

# How to use

## Read EncLst

### From file
```
import { EncLst} from 'enclst-core-js'
import * as fs from "node:fs/promises";

const path = "path/of/enclst.enclst"
let str = await fs.readFile('test/data/test02.enclst', { encoding: "utf8" })
let enclst  = new EncLst(str)
```

### From network
```
import { EncLst} from 'enclst-core-js'

const url = "https://github.com/UedaTakeyuki/EncLst/blob/main/examples/EncycloList/lang/en/en.enclst"

let enclst = {}
const res = await fetch(this.url) 
if (res.status == 200) {
  const data = await res.text();
  enclst = new EncLst(data)
}
```

## get title

### get title of the enclst
```
console.log(enclst.title)
```

### get title of an item
```
console.log(enclst.items[0].title)
```

## get value
```
const value = enclst.items[0].value
if (value.hasParams()){
  console.log(value.first()) // first positional parameter
}
if (value.hasPositinalParams()){
  console.log(value.positional[0]) // first positional parameter
}
if (value.hasNamedParams()){
  if ('aho' in value.named){
    console.log(value.named['aho']) // named by 'aho'
  }
}
```

# API

## How to make
```
yarn makedoc
```

API documents will be created to ``docs`` folder.

## Latest API document
latest document is available [here](https://uedatakeyuki.github.io/enclst-core-js).

# Test

```
yarn test
```

The test environment was set up according to this [blog](https://architecting.hateblo.jp/entry/2021/02/10/152147).

# Version
- V1: Original version
- V2: Made interface consistent with the [dart version](https://github.com/UedaTakeyuki/enclst_core_dart).