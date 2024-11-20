export let ValueChecker = {
  /// Is this URL?
  isURL: function(s){
    if (s.substring(0, 7) == "http://" ||
        s.substring(0, 8) == "https://" ||
        s.substring(0, 7) == "file://") {
      return true;
    } else {
      return false;
    }
  },

  /// Is this Path?
  isPath: function(s) {
    if (this.isURL(s)) {
      return true;
    } else if (s.substring(0, 1) == "./" || s.substring(0, 0) == "/") {
      return true;
    } else if (s.indexOf('/') != -1) {
      return true;
    } else {
      return false;
    }
  },

  /// Is this string for Enclst file name?
  isEnclst: function(s){
    if (s.endsWith('.enclst')) {
      return true;
    } else {
      return false;
    }
  },

  /// Is this youtube contents ID?
  isYTcontentID: function(s){
    if (this.isPath(s) || this.isEnclst(s)) {
      return false;
    } else {
      if (s.length == 11) {
        return true;
      } else {
        return false;
      }
    }
  },

  /// Is this youtube playlist ID?
  isYTplaylistID: function(s){
    if (this.isPath(s) || this.isEnclst(s)) {
      return false;
    } else {
      if (s.substring(0, 2) == "PL") {
        if (s.length == 18 || s.length == 34) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  },
}