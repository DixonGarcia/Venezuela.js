/**
 * JavaScript dom simple lib
 * Copyright (C) 2011 Daniel Rodríguez (sadasant.com)
 *
 * his program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

(function(){

  // Impositive dom is impositive (for now)
  var dom  = window.dom = {}
    , doc  = document
    , _dom = {}

  // TODO: The dom.js model for every element

  _dom.getAttributes = function (el) {
    var att = {}
      , ignore = ''
      , c = 0
    if (~el.indexOf('#')) {
      el = el.split('#')
      att.id = el.length > 1 ? el[1] : ''
    } else
    if (~el.indexOf('.')) {
      el = el.split('.')
      att.class = el.length > 1 ? el[1] : ''
    }
    if (att.keys)
    for (var i in att) {
      var _att = _dom.getAttributes(att[i])
      for (var k in _att) { att[k] = _att[k] }
    }
    return att
  }

  /**
   * Returns an HTML element found by id, class or tag name.
   *
   * @param {String} str
   *
   */
  dom.get = function (str) {

    // element holder
    var el;

    // element identifier
    switch (str[0]) {
      case '#': // #id
        str = str.slice(1)
        el  = doc.getElementById(str)
        break
      case '.': // .class
        str = str.slice(1)
        el  = doc.getElementsByClassName(str)
        break
      default: // tagName
        el  = doc.getElementsByTagName(str)
        break
    }

    if (el.length && el.length == 1) {
      return el[0]
    } else {
      return el;
    }
  }

  /**
   * Returns an HTML element found by id, class or tag name.
   *
   * @param {String} str
   *
   */
  dom.new = function () {
    var el
      , tag    = ''
      , att    = {}
      , cont   = ''
      , childs = ''
      , els
      , callback
      , args = Array.prototype.slice.call(arguments)

    // main element
    el = args.splice(0, 1)[0].split(' ')

    // childs
    if (el.length > 1)
      childs = el.splice(1)
    el = el[0]

    // get attributes
    att = _dom.getAttributes(el)
    el = el
      .split('#',1)[0]
      .split('.',1)[0]
      .split('[',1)[0]

    // process input
    for (var i in args) {
      var e = args[i]
      switch (typeof e) {
        case 'string':
          !cont && (cont = e)
          break
        case 'number':
          !cont && (cont = e)
        case 'object':
          if (e.length)
            els = e
          else
            for (var k in e) { att[k] = e[k] }
          break
        case 'function':
          callback = e
          break
        default:
          return
          break
      }
    }

    if (els && els.length) {
      return els.map(function (e) { return dom.new(el, att, e) })
    }

    el = doc.createElement(el)

    for (var a in att) {
      el.setAttribute(a, att[a])
    }

    if (cont) el.innerHTML = cont

    return callback ? callback(el) : el
  }


  /**
   * TODO: describe this.
   */
  dom.write = function () {
    var args = arguments
      , body = dom.get('body') || doc.childNodes[0]
    for (var i in args) {
      var e = args[i]
        , type = typeof e
      if ( type == 'string' || type == 'number') {
        var lines = e.split('\n')
        if (lines.length) {
          lines.forEach(function (e, i){
            body.appendChild(doc.createTextNode(e))
            if (i < lines.length-1)
              body.appendChild(dom.new('br'))
          })
        } else {
          body.appendChild(doc.createTextNode(e))
        }
      } else {
        body.appendChild(e)
      }
    }
  }

  /**
   * TODO: describe this.
   */
  dom.fill = function (to, els) {
    for (var i in els) {
      to.appendChild(els[i])
    }
    return to
  }

})();

