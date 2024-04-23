## Classes

<img src="assets/UML.jpg">

## How to use

### Read EncLst 

#### From File
```
import { EncLst} from 'enclst-core-js'
import * as fs from "node:fs/promises";

const path = "path/of/enclst.enclst"
let str = await fs.readFile('test/data/test02.enclst', { encoding: "utf8" })
let enclst  = new EncLst(str)
```

#### From Network
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