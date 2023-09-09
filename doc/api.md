yarn run v1.22.10
$ /Volumes/devtmp/MyJs/enclst-core-js/node_modules/.bin/jsdoc2md src/index.js
<a name="module_enclist-core-js"></a>

## enclist-core-js

* [enclist-core-js](#module_enclist-core-js)
    * _static_
        * [.stringToResArray()](#module_enclist-core-js.stringToResArray)
        * [.getTitle()](#module_enclist-core-js.getTitle)
        * [.getListItems()](#module_enclist-core-js.getListItems)
        * [.parseAttr(attr)](#module_enclist-core-js.parseAttr) ⇒ <code>posAndNamed</code>
    * _inner_
        * [~posAndNamed](#module_enclist-core-js..posAndNamed) : <code>Object</code>

<a name="module_enclist-core-js.stringToResArray"></a>

### enclist-core-js.stringToResArray()
Create Result Array, an array by dividing a string with line feed codes.

**Kind**: static method of [<code>enclist-core-js</code>](#module_enclist-core-js)  
<a name="module_enclist-core-js.getTitle"></a>

### enclist-core-js.getTitle()
get title of an Enclst from Resut Array.

**Kind**: static method of [<code>enclist-core-js</code>](#module_enclist-core-js)  
<a name="module_enclist-core-js.getListItems"></a>

### enclist-core-js.getListItems()
get list items of an Enclist from Result Array.

**Kind**: static method of [<code>enclist-core-js</code>](#module_enclist-core-js)  
<a name="module_enclist-core-js.parseAttr"></a>

### enclist-core-js.parseAttr(attr) ⇒ <code>posAndNamed</code>
parse attr

**Kind**: static method of [<code>enclist-core-js</code>](#module_enclist-core-js)  
**Returns**: <code>posAndNamed</code> - parse result a positional params & named params  

| Param | Type |
| --- | --- |
| attr | <code>strng</code> | 

<a name="module_enclist-core-js..posAndNamed"></a>

### enclist-core-js~posAndNamed : <code>Object</code>
**Kind**: inner typedef of [<code>enclist-core-js</code>](#module_enclist-core-js)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| positional | <code>Array.&lt;string&gt;</code> | Array of string for positional params |
| named | <code>Object</code> | Object of name(string) & value(string) pair of named params |

Done in 1.61s.
