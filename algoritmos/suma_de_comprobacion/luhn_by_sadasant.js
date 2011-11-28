/**
 * Luhn algorithm implementation in JavaScript
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

var luhn = {

  /**
   * getCheckNum()
   *
   * Parameters: account number, base
   * Returns: a check num for further validation
   */
  getCheckNum: function (acc) {
    if (!(acc)) return
    acc = (acc + '0').split('').reverse()
    return ((acc.reduce(function (p, c, i) {
      return (p*1) + ((i%2 && c < 5) ? c*2 : c*1)
    }) * 9)+'').slice(-1)
  },

  /**
   * check()
   *
   * Parameters: account number, base
   * Returns: true if valid, else false
   */
  check: function (acc) {
    if (!(acc)) return
    acc = (acc + '0').split('').reverse()
    return !(acc.reduce(function (p, c, i) {
      return (p*1) + ((!(i%2) && c < 5) ? c*2 : c*1)
    }) % 10)
  }

}


function test (acc) {
  acc  = acc  || '7992739871'
      
  document.write('')

  // add the check num
  var check_num = luhn.getCheckNum(acc)
    , wrong_check_num
    , br = '<br>'
  document.writeln(check_num+' is the check num for '+acc+br+br)
  document.writeln('Checking ' + acc + check_num + br)
  document.writeln(luhn.check(acc + check_num)+br+br)

  // check true
  wrong_check_num = check_num*1 + 1
  document.writeln('Checking ' + acc + wrong_check_num + br)
  document.writeln(luhn.check(acc + wrong_check_num)+br+br)

  // check false
  wrong_check_num++
  document.writeln('Checking ' + acc + wrong_check_num + br)
  document.writeln(luhn.check(acc + wrong_check_num)+br+br)
}

test('7992739871')
