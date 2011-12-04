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
  el: function (str) {

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
  }

}

