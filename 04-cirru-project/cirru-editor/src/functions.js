// Generated by CoffeeScript 1.4.0
var __slice = [].slice,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

define(function(require, exports) {
  var atHead, atTail, backspace, caret, clear, create_block, ctrl_c, ctrl_v, ctrl_x, empty, found, has_caret, inHead, inTail, insert_char, isArr, isCell, isStr, key_delete, last, move_down, move_end, move_home, move_left, move_right, move_up, page_down, point, rm_caret, show, spacebar;
  caret = '\t';
  isArr = Array.isArray;
  isStr = function(item) {
    return (typeof item) === 'string';
  };
  found = function(item) {
    return item.length > 0;
  };
  empty = function(item) {
    return item.length === 0;
  };
  point = function(item) {
    return (isStr(item)) && (item.indexOf(caret)) > -1;
  };
  show = function() {
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return console.log.apply(console, args);
  };
  clear = function(item) {
    if (isStr(item)) {
      return item.replace(/\t/, '');
    } else if (isArr) {
      return item.filter(function(x) {
        return x !== caret;
      });
    }
  };
  isCell = function(item) {
    if (isArr(item)) {
      if (item.length === 1) {
        if (item[0] === caret) {
          true;
        }
      }
    }
    return false;
  };
  atHead = function(item) {
    if (isStr(item)) {
      if (item[0] === caret) {
        return true;
      }
    }
    return false;
  };
  inHead = function(item) {
    if (isArr(item)) {
      if (item[0] === caret) {
        return true;
      }
    }
    return false;
  };
  last = function(item) {
    var len;
    len = item.length;
    return item[len - 1];
  };
  atTail = function(item) {
    if (isStr(item)) {
      if ((last(item)) === caret) {
        return true;
      }
    }
    return false;
  };
  inTail = function(item) {
    if (isArr(item)) {
      if ((last(item)) === caret) {
        return true;
      }
    }
    return false;
  };
  has_caret = function(item) {
    var x, _i, _len;
    if (isStr(item)) {
      return point(item);
    } else if (isArr(item)) {
      for (_i = 0, _len = item.length; _i < _len; _i++) {
        x = item[_i];
        if (has_caret(x)) {
          return true;
        }
      }
      return false;
    }
  };
  exports.rm_caret = rm_caret = function(item) {
    var ret;
    if (isStr(item)) {
      return clear(item);
    } else if (isArr(item)) {
      ret = [];
      item.forEach(function(x) {
        var piece;
        piece = rm_caret(x);
        if (found(piece)) {
          return ret.push(piece);
        }
      });
      return ret;
    }
  };
  exports.insert_char = insert_char = function(list, char) {
    var ret;
    ret = [];
    list.forEach(function(item) {
      if (isStr(item)) {
        return ret.push(item.replace(/\t/, "" + char + "\t"));
      } else if (isArr(item)) {
        return ret.push(insert_char(item, char));
      } else {
        return ret.push(item);
      }
    });
    return ret;
  };
  exports.backspace = backspace = function(list) {
    var ret;
    ret = [];
    list.forEach(function(item) {
      var res;
      if (item === caret) {
        if (empty(item)) {
          return ret.push(caret);
        } else {
          ret.pop();
          return ret.push(caret);
        }
      } else if (isStr(item)) {
        res = item.replace(/.{1}\t/, caret);
        return ret.push(res);
      } else if (isCell(item)) {
        return ret.push(caret);
      } else if (isArr) {
        return ret.push(backspace(item));
      }
    });
    return ret;
  };
  exports.insert_blank = function(list) {
    return insert_char(list, " ");
  };
  exports.create_block = create_block = function(list) {
    var ret;
    ret = [];
    list.forEach(function(item) {
      if (isArr(item)) {
        return ret.push(create_block(item));
      } else if (point(item)) {
        if (found(clear(item))) {
          ret.push(clear(item));
        }
        return ret.push([caret]);
      } else {
        return ret.push(item);
      }
    });
    return ret;
  };
  exports.spacebar = spacebar = function(list) {
    var ret;
    ret = [];
    list.forEach(function(item) {
      if (isArr(item)) {
        return ret.push(spacebar(item));
      } else if (item === caret) {
        return ret.push(caret);
      } else if (point(item)) {
        return ret.push(clear(item), caret);
      } else {
        return ret.push(item);
      }
    });
    return ret;
  };
  exports.page_down = page_down = function(list) {
    var mark, ret;
    ret = [];
    mark = false;
    list.forEach(function(item) {
      var piece;
      if (mark) {
        if (isArr(item)) {
          item.unshift(caret);
          ret.push(item);
        } else if (isStr(item)) {
          ret.push(caret.concat(item));
        }
        return mark = false;
      } else if (has_caret(item)) {
        mark = true;
        piece = rm_caret(item);
        if (found(piece)) {
          return ret.push(piece);
        }
      } else {
        return ret.push(item);
      }
    });
    if (mark) {
      ret.push([caret]);
    }
    return ret;
  };
  exports.page_up = function(list) {
    list = page_down(list.reverse());
    return list.reverse();
  };
  exports.move_home = move_home = function(list) {
    var ret;
    ret = [];
    list.forEach(function(item) {
      var piece;
      if (isStr(item)) {
        if (item === caret) {
          return ret.unshift(caret);
        } else if (atHead(item)) {
          ret.push(caret);
          if (found(item.slice(1))) {
            return ret.push(item.slice(1));
          }
        } else if (point(item)) {
          return ret.push(caret.concat(clear(item)));
        } else {
          return ret.push(item);
        }
      } else if (isArr(item)) {
        if (inHead(item)) {
          ret.push(caret);
          if (found(item.slice(1))) {
            return ret.push(item.slice(1));
          }
        } else if (__indexOf.call(item, caret) >= 0) {
          piece = clear(item);
          piece.unshift(caret);
          return ret.push(piece);
        } else {
          return ret.push(move_home(item));
        }
      }
    });
    return ret;
  };
  exports.move_end = move_end = function(list) {
    var mark, ret;
    ret = [];
    mark = false;
    list.forEach(function(item) {
      var piece;
      if (isStr(item)) {
        if (item === caret) {
          return mark = true;
        } else if (atTail(item)) {
          return ret.push(clear(item), caret);
        } else if (point(item)) {
          return ret.push((clear(item)).concat(caret));
        } else {
          return ret.push(item);
        }
      } else if (isArr(item)) {
        if (inTail(item)) {
          if (found(clear(item))) {
            ret.push(clear(item));
          }
          return ret.push(caret);
        } else if (__indexOf.call(item, caret) >= 0) {
          piece = clear(item);
          piece.push(caret);
          return ret.push(piece);
        } else {
          return ret.push(move_end(item));
        }
      }
    });
    if (mark) {
      ret.push(caret);
    }
    return ret;
  };
  exports.move_left = move_left = function(list) {
    var ret;
    ret = [];
    list.forEach(function(item) {
      var tail;
      if (item === caret) {
        tail = ret.pop();
        if (tail != null) {
          if (isArr(tail)) {
            tail.push(caret);
          } else if (isStr(tail)) {
            tail = tail.concat(caret);
          }
          return ret.push(tail);
        } else {
          return ret.push(caret);
        }
      } else if (inHead(item)) {
        ret.push(caret);
        item.shift();
        if (found(item)) {
          return ret.push(move_left(item));
        }
      } else if (isArr(item)) {
        return ret.push(move_left(item));
      } else if (atHead(item)) {
        return ret.push(caret, item.slice(1));
      } else if (point(item)) {
        return ret.push(item.replace(/(.)(\t)/, "$2$1"));
      } else {
        return ret.push(item);
      }
    });
    return ret;
  };
  exports.move_right = move_right = function(list) {
    var mark, ret;
    ret = [];
    mark = false;
    list.forEach(function(item) {
      var piece;
      if (item === caret) {
        return mark = true;
      } else if (isStr(item)) {
        if (mark) {
          ret.push(caret.concat(item));
          return mark = false;
        } else if (atTail(item)) {
          return ret.push(item.slice(0, item.length - 1), caret);
        } else {
          return ret.push(item.replace(/(\t)(.)/, "$2$1"));
        }
      } else if (isArr(item)) {
        if (mark) {
          item.unshift(caret);
          ret.push(item);
          return mark = false;
        } else if (inTail(item)) {
          piece = item.slice(0, item.length - 1);
          if (found(piece)) {
            ret.push(piece);
          }
          return ret.push(caret);
        } else {
          return ret.push(move_right(item));
        }
      }
    });
    if (mark) {
      ret.push(caret);
    }
    return ret;
  };
  exports.move_up = move_up = function(list) {
    var ret;
    ret = [];
    list.forEach(function(item) {
      var tail;
      if (isStr(item)) {
        if (item === caret) {
          tail = ret.pop();
          if (tail != null) {
            if ((isArr(tail)) && (!tail.every(isStr))) {
              tail.push(caret);
              return ret.push(tail);
            } else {
              return ret.push(caret, tail);
            }
          } else {
            return ret.push(caret);
          }
        } else if (point(item)) {
          ret.push(caret);
          if (found(clear(item))) {
            return ret.push(clear(item));
          }
        } else {
          return ret.push(item);
        }
      } else if (isArr(item)) {
        if (inHead(item)) {
          ret.push(caret);
          if (found(clear(item))) {
            return ret.push(clear(item));
          }
        } else {
          return ret.push(move_up(item));
        }
      }
    });
    return ret;
  };
  exports.move_down = move_down = function(list) {
    var mark, ret;
    ret = [];
    mark = false;
    list.forEach(function(item) {
      if (isStr(item)) {
        if (item === caret) {
          return mark = true;
        } else if (point(item)) {
          if (found(clear(item))) {
            ret.push(clear(item));
          }
          return ret.push(caret);
        } else {
          return ret.push(item);
        }
      } else if (isArr(item)) {
        if (mark && (!item.every(isStr))) {
          item.unshift(caret);
          ret.push(item);
          return mark = false;
        } else if (inTail(item)) {
          if (found(clear(item))) {
            ret.push(clear(item));
          }
          return ret.push(caret);
        } else {
          return ret.push(move_down(item));
        }
      }
    });
    if (mark) {
      ret.push(caret);
    }
    return ret;
  };
  exports.key_delete = key_delete = function(list) {
    var ret;
    ret = [];
    list.forEach(function(item) {
      var tail;
      if (item === caret) {
        tail = ret.pop();
        return ret.push((tail != null ? tail.concat(caret) : caret));
      } else if (point(item)) {
        return ret.push(caret);
      } else if (isCell(item)) {
        return ret.push(caret);
      } else if (isArr(item)) {
        return ret.push(key_delete(item));
      } else {
        return ret.push(item);
      }
    });
    return ret;
  };
  exports.ctrl_x = ctrl_x = function(list) {
    var ret;
    ret = [];
    list.forEach(function(item) {
      if (isStr(item)) {
        if (point(item)) {
          window.cirru_copyboard = item;
          return ret.push(caret);
        } else {
          return ret.push(item);
        }
      } else if (isArr(item)) {
        if (__indexOf.call(item, caret) >= 0) {
          window.cirru_copyboard = item;
          return ret.push(caret);
        } else {
          return ret.push(ctrl_x(item));
        }
      }
    });
    return ret;
  };
  exports.ctrl_c = ctrl_c = function(list) {
    list.forEach(function(item) {
      if (isStr(item)) {
        if (point(item)) {
          return window.cirru_copyboard = item;
        }
      } else if (isArr(item)) {
        if (__indexOf.call(item, caret) >= 0) {
          return window.cirru_copyboard = item;
        } else {
          return ctrl_c(item);
        }
      }
    });
    return list;
  };
  exports.ctrl_v = ctrl_v = function(list) {
    var ret;
    ret = [];
    list.forEach(function(item) {
      if (isStr(item)) {
        if (point(item)) {
          if (window.cirru_copyboard != null) {
            if (found(clear(item))) {
              ret.push(clear(item));
            }
            return ret.push(window.cirru_copyboard);
          } else {
            return ret.push(item);
          }
        } else {
          return ret.push(item);
        }
      } else if (isArr(item)) {
        return ret.push(ctrl_v(item));
      }
    });
    return ret;
  };
  exports.ctrl_z = function(his) {
    var len, ret;
    len = his.all.length;
    if (his.now > 0) {
      his.now -= 1;
    }
    ret = his.all[his.now];
    return ret;
  };
  exports.ctrl_y = function(his) {
    var len, ret;
    len = his.all.length;
    if (len > (his.now + 1)) {
      his.now += 1;
    }
    ret = his.all[his.now];
    return ret;
  };
  exports.add_history = function(his, list) {
    his.all.push(list);
    his.now += 1;
    his.all = his.all.slice(0, +his.now + 1 || 9e9);
    if (his.all.length > 1000) {
      his.all.shift();
      his.now -= 1;
    }
    return his;
  };
  exports.reset_history = function(his, list) {
    his.all = [list];
    his.now = 0;
    return his;
  };
});
