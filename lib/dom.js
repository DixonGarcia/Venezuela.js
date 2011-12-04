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

var dom = {

  /**
   * Returns an HTML element found by id, class or tag name.
   *
   * @param {String} str
   *
   */
  find: function (str) {

    // element holder
    var el;

    // element identifier
    switch (str[0]) {
      case '#': // #id
        str = str.slice(1)
        el  = document.getElementById(str)
        break
      case '.': // .class
        str = str.slice(1)
        el  = document.getElementsByClassName(str)
        break
      default: // tagName
        el  = document.getElementsByTagName(str)
        break
    }

    return el;
  },

  /**
   * Returns an HTML element found by id, class or tag name.
   *
   * @param {String} str
   *
   */
  new: function () {
    var el
      , type = ''
      , cont = ''
      , attr
      , els
      , end
      , args = Array.prototype.slice.call(arguments)

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
        els = els.map(function (e) {
          var o = dom.new('option',e)
          el.appendChild(o)
        })
        break
      default:
        el = document.createElement(type)
        el.innerHTML = cont
        break
    }

    // TODO: set attributes

    return end ? end(el) : el
  }

}

