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
  var dom = window.dom = {}
    , doc = document

  /**
   * Returns an HTML element found by id, class or tag name.
   *
   * @param {String} str
   *
   */
  dom.find = function (str) {

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

    return el;
  }

  /**
   * Returns an HTML element found by id, class or tag name.
   *
   * @param {String} str
   *
   */
  dom.new = function () {
    var el
      , type = ''
      , cont = ''
      , attr
      , els
      , end
      , args = Array.prototype.slice.call(arguments)

    if (args.length == 1)
      return doc.createElement(args[0])

    // process input
    for (var i in args) {
      var e = args[i]
      switch (typeof e) {
        case 'string':
          !type && (type = e) ||
          !cont && (cont = e)
          break
        case 'number':
          !cont && (cont = e)
        case 'object':
          if (e.length) els = e
          else attr = e
          break
        case 'function':
          end = e
          break
        default:
          return
          break
      }
    }

    switch (type) {
      case 'select':
        el = dom.new(type)
        els.forEach(function (e) {
          el.appendChild(dom.new('option',e))
        })
        break
      default:
        el = doc.createElement(type)
        el.innerHTML = cont
        break
    }

    // TODO: set attributes

    return end ? end(el) : el
  }


  /**
   * Returns an HTML element found by id, class or tag name.
   *
   * @param {String} str
   *
   */
  dom.write = function () {
    var args = arguments
    for (var i in args) {
      var e = args[i]
        , type = typeof e
      if ( type == 'string' || type == 'number') {
        doc.childNodes[0].appendChild(doc.createTextNode(e))
      } else {
        doc.childNodes[0].appendChild(e)
      }
    }
  }

})();

