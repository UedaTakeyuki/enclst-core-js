/**
 * A FilePath to the origin file.
 * @mixes ValueChecker
 */
export class FilePath {
  constructor(filepath){
    this.filepath = filepath
  }

  /**
  Calculate the file path of the next Encrust file.

  Return the <b>URL</b> string to get the Enclst file indicated by the parameter <i>path</i>. 
  Depending on what the parameter <i>path</i> is like, it is evaluated as following:

  <h6>Full URL</h6>
  In the case of the path is the full version of the URL string like a "https:www.a.com/b.enlist"
  which can be used as the parameter of the HTTP Get for fetching a new enclist file,
  this function returns the same string of the input parameter path as is. 
  
  <h6> Absolute Path</h6>
  In the case of the path is the absolute path string start with "/" like a "/b.enlist",
  return value is depend on the presence of an additional named parameter "v_root" indicating a virtual root. 

  <li><b>without v-root</b></li>
  Calculate subsequent URL from the current URL that storeed in the member valuable of this enclst, and a parameter path that indicate a next enclst which is loading.
  Retuned nextURL is calculated as joind of the current url and path.
  You can optionally specify a base_url, which will be used instead of the current url.

  <li><b>with v-root</b></li>
  Calculate subsequent URL from the current URL that storeed in the member valuable of this enclst, and a parameter path that indicate a next enclst which is loading.
  Retuned nextURL is calculated as joind of the current url and path.
  You can optionally specify a base_url, which will be used instead of the current url.

  <h6> Relative Path </h6>
  Calculate subsequent URL from the current URL that storeed in the member valuable of this enclst, and a parameter path that indicate a next enclst which is loading.
  Retuned nextURL is calculated as joind of the current url and path.
  You can optionally specify a base_url, which will be used instead of the current url.

*/
  nextFilePath(path, v_root = "") {
    // path is full url, use it as is.
    if (this.isURL(path)) {
      return path;

      // path is absolute
    } else if (path[0] == "/") {
      // Get origin (protocol:port//server name) from current file path.
      let origin = (new URL(this.filepath)).origin;

      // The virtual root is specified.
      if (v_root != "") {
        // if it end with `/`
        if (v_root[v_root.length - 1] == '/') {
          // remove trailing '/'
          v_root = v_root.substring(0, v_root.length - 1);
        }
        // Set specified virtual root as origin
        origin = v_root;
      }

      // note: THe path string is start with `/`.
      return origin + path;

      // path is relative
    } else {
      // set path context for url
      //var context = p.Context(style: p.Style.url);
      // join current parent path (..) and filepath
      //return (context.canonicalize(context.join(filepath ?? "", "..", path)));
      return(new URL(path, this.filepath).toString())
    }
  }
}

// Mixin
import {ValueChecker} from './mixins/value_checker.js'
Object.assign(FilePath.prototype, ValueChecker);