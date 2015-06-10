#5ta clase, P2PU-juegos-con-javascript: Algoritmos.#
**28 / 11 / 2011**


###Participantes:###
**Josalys matos**  [@VirginiaSeijas][twitterVirginiaSejias]  
**Daniel Rodríguez**  [@sadasant][twitterDanielRodriguez]  
**Carhil Matos**  [@krhil][twitterCarhilMatos]  
**Dixon García**  [@DxnxD][twitterDixonGarcia]  
**Daniel Aubourg**  [@tristanoff][twitterDanielAubourg]  
**Stefan Alexander Meng**  [@alexstefan92][twitterSAM]  
**José Reyna**  [@jobliz][twitterJoseReyna]  
**Roberto Tatasciore**  [@robdiminished][twitterRobertoTatasciore]  
**Andrés Brizuela**  [@edMugen][twitterAndresBrizuela]  


**Medio:** Teamspeak  
**Servidor:** voice.teamspeak.com  
**Canal:** vzla.js  
**Clave:** tio_simon  


---


##Clase escrita:##
[https://github.com/.../teoria.md][writtenClassGitHub5]


##Temas a discutir:##
*  **Checksums** (Teoría).
*  **Luhn** (Teoría).
*  **Luhn** (Implementación iterativa).
*  **Algunos métodos de los distintos tipos de variables en JavaScript.**
*  **Luhn** (Implementación funcional).


###Teoría:###
*  **Checksums:** Ver [enlace a clase][writtenClassGitHub5] en Github.
  *  Luhn: Ver [enlace a clase][writtenClassGitHub5] en Github.
     *  [http://en.wikipedia.org/.../Luhn_algorithm][fuenteWikipediaLuhn]
     *  [https://github.com/.../luhn-algorithm][recursoGitHubLuhnAlgorithm]
     *  [http://imei.sms.eu.sk/][fuenteImeiSmsEu]

*  **Base numérica:** En un sistema de numeración posicional, la base numérica es la cantidad de símbolos que posee el sistema.
  *  Más información: [http://es.wikipedia.org/.../Base_(aritmética)][fuenteWikipediaBaseNumerica]



###Ejemplos de Luhn:###

Generación de suma para: ``12345``
  
  
    Posición:        6    5    4    3    2    x  
                   [ 1 ][ 2 ][ 3 ][ 4 ][ 5 ][ x ]  
    x 2     :      [ 2 ][ 2 ][ 6 ][ 4 ][10 ][ x ]  
    No > 9  :      [ 2 ][ 2 ][ 6 ][ 4 ][ 1 ][ x ]  
    Suma    :        2  + 2  + 6  + 4  + 1 =  15  
    x 9     :                       15 * 9 = 135  
    Checksum(Numero de verificacion):          5  
    Número completo:                      123455  
  
  
Comprobación de suma para: ``123455``
  
  
    Posición:    6    5    4    3    2    1
               [ 1 ][ 2 ][ 3 ][ 4 ][ 5 ][ 5 ]
    x 2     :  [ 2 ][ 2 ][ 6 ][ 4 ][ 10][ 1 ]
    No > 9  :  [ 2 ][ 2 ][ 6 ][ 4 ][ 1 ][ 5 ]
    Suma    :    2  + 2  + 6  + 4  + 1  + 5   = 20
    
    ?       :    20 % 10 == 0    //   Correcto



**EJEMPLO UNO:** [https://github.com/.../luhn-algorithm][recursoGitHubLuhnAlgorithm]


**Líneas interesantes:**

*  ``i = identifier.length-1``
   *  Descripción:
      Guarda en "i" el tamaño de "identifier" menos 1.
   *  Variables ejemplo:
      *  ``identifier = '123455'``
      *  ``i == 5``
   *  Alternativas:
      *  ``var x = 0; while (identifier[x] !== undefined) { x++;}``
      *  ``var c = 1; for (var i in identifier) { c++ }``

*  Comportamientos del while:
   *  ``var arr = [1,2,3]; while(arr.pop()) { console.log(arr) }  //  [1, 2] -> [1] -> []``
   *  ``var arr = [1,2,3], c; while(c = arr.pop()) { console.log(c) }``

*  ``num = parseInt(identifier.charAt(i), 10)``
   *  Variables ejemplo:
     *  ``identifier = '123455'``
     *  ``i = 0``
   * Alternativas:
     *  ``num = parseInt(identifier.charAt(i));``
     *  ``num = parseInt(identifier.slice(i, i + 1));``
     *  ``num = parseInt(identifier[i]);``
     *  ``num = identifier[i] * 1;``
     *  ``num = parseInt(identifier.subString(i, i + 1));``

* Comportamientos del parseInt():
   *  ``parseInt('123')       // 123``
   *  ``parseInt('123abc')    // 123``
   *  ``parseInt('abc123')    // NaN``
   *  ``parseInt('abc')       // NaN``
   *  ``parseInt(false)       // NaN``
   *  ``parseInt('123b56');   // 123``
   *  ``parseInt('c123b56');  // NaN``
   *  ``parseInt(123.368);    // 123``
   *  ``parseInt('123,368');  // 123``

*  isNaN(num)
   *  Descripción:
      *  Comprueba si el valor pasado es un número válido. Retorna falso si es un número y verdadero en caso contrario.
   *  Variables ejemplo
      *  ``num = 0;        //  isNaN(num) == false``
      *  ``num = '0';      //  isNaN(num) == false``
      *  ``num = false;    //  isNaN(num) == false``
      *  ``num = 'a';      //  isNaN(num) == true``
      *  ``num = '124b65'  //  isNaN(num) == true``


Funcionamiento de ``break``: [https://developer.mozilla.org/.../break][fuenteMozillaBreak]   

    etiqueta:
        for(...)
        {
            otra:
            for(...){
                otra2:
                for(...){
                    if(...) break etiqueta;
                    elseif(...) break otra;
                    else(...) break otra2 ;
        }  



*  ``(num % 10)``
   *  Descripción:
      *  El residuo de la divisón de un número entre 10 es igual a su último dígito.
   *  Ejemplos:
      *  ``num = 12345; num % 10;    // 5``
      *  ``num = 1234; num % 10;     // 4``
      *  ``13124121231231232%10      // 2``
      *  ``11231412312214124213124121231231232%10 // 6``  >> Un error producido por exceder el tamaño máximo de una variable en JavaScrip

*  return (sum % 10 == 0);
   *  Retorna si es verdadero o falso; lo que interesa aquí son las validaciones "sin if", ejemplos:
      *  ``(4 % 2)   //  0  // false``
      *  ``(4 == 2)  //  false``
      *  ``(false || (0 && true) && (1 && true && 0))  // false``
      *  ``var a = 1, c; (a && (c = 1))  //  1``
      *  etc...



**EJEMPLO DOS:** [http://imei.sms.eu.sk/][fuenteImeiSmsEu]  


**Pasos:** 
 

*  Primero recorre todos los elementos de la variable Luhn y los suma entre si:
   *  Caso Luhn = '1234': 1+2+3+4 =  10 .
   *  La suma va en 10.

*  Entra en el segundo for, con el delta:
   *  Delta: ``[0,1,2,3,4,-4,-3,-2,-1,0]``
   *  Empieza con la última posición y va restando en 2:
      *  ``delta[4] // 4``
      *  ``sum += delta[4] // 10 + 4 = 14``
      *  ``delta[2] // 2``
      *  ``sum += delta[2] // 14 + 2 = 16``

*  ``var mod10 = 16 % 10``
   *  ``16 % 10 == 6``

*  ``mod10 = 10 - mod10``
   *  ``10 - 6 == 4``

*  ``return (mod10 == 10) ? 0 : mod10``



**TERCER EJEMPLO:**


*  HTML+CSS (SAM) [http://jsbin.com/...][recursoJSbinLuhnInterface]
*  JavaScript: [https://github.com/.../luhn_by_sadasant.js][codigoGitHubLuhnAlgorithm]

*  Algunas funciones nuevas:
   *  ``'123'.split('') // ['1','2','3']``
   *  ``'123'.split('2') // ['1','3']``
   *  ``['1','2','3'].reverse() // ['3','2','1']``
   *  ``acc = 12345; (acc + '0').split('').reverse() // ["0", "5", "4", "3", "2", "1"]``


Función ``reduce``: [https://developer.mozilla.org/.../Reduce][fuenteMozillaReduce]   
    
   
    [0,1,2,3,4,5].reduce(function (anterior, actual){
        return anterior + actual;
    }) // 15

    [1,2,3,4,5].reduce(function (anterior, actual){ 
        console.log(anterior,actual)
    },0) 
    // consola:
        0 1
        undefined 2
        undefined 3
        undefined 4
        undefined 5



*  ``return (p * 1) + ((i % 2) ? (c < 5 ? (c * 2) : ((c * 2) - 9)) : c)``
   *  ``p = valor previo``
   *  ``p * 1 (Pasar a entero implicitament)``

*  ``if (i % 2)`` (si el index del array es par)
   *  ``if (c < 5)``  (si c es mayor q 5 empieza a generar num > 9)
      *  ``(c * 2)``  (cuando es menor a 5 sólo multiplica por 2)
      *  ``(c * 2) - 9``  (de lo contrario, multiplica por 2 y resta 9 al producto)
   *  ´´c´´ (si el index del array no es par no afecta el número)

* ``return p + c`` (retorna el dígito previo más el actual)
 

**If ternarios:**

*  ``3 == 3 ? true : false // retorna true``
*  ``3 == 4 ? true : false // retorna false``
*  ``var n = 3; (3 == n ? ( (n % 2) ? ('impar') : ('par') ) : false )  // retorna 'impar'``


Para el caso '12345'  

*  Añadimos '0': '123450'

*  ``.split()   : ['1','2','3','4','5','0']``

*  ``.reverse() : ['0','5','4','3','2','1']``

*  Primera vuelta:
   *  ``p = '0'``
   *  ``c = '5'``
   *  ``i = 1``
   *  ``r = (p * 1) + ((i % 2) ? c < 5 ? c*2 : (c * 2)-9 : c)``
   *  ``return r // 0 + (5*2)-9 // 1``

*  Segunda vuelta:
   *  ``p = '1'``
   *  ``c = '4'``
   *  ``i = 2``
   *  ``r = (p*1) + ((i%2) ? c < 5 ? c*2 : (c*2)-9 : c)``
   *  ``return r // 1 + 4  // 5``

*  Tercera vuelta:
   *  ``p = '5'``
   *  ``c = '3'``
   *  ``i = 3``
   *  ``r = (p*1) + ((i%2) ? c < 5 ? c*2 : (c*2)-9 : c)``
   *  ``return r // 5 + 6 // 11``

*  Cuarta vuelta:
   *  ``p = '11'``
   *  ``c = '2'``
   *  ``i = 4``
   *  ``r = (p*1) + ((i%2) ? c < 5 ? c*2 : (c*2)-9 : c)``
   *  ``return r // 11 + 2 // 13``

*  Quinta vuelta:
   *  ``p = '13'``
   *  ``c = '1'``
   *  ``i = 5``
   *  ``r = (p*1) + ((i%2) ? c < 5 ? c*2 : (c*2)-9 : c)``
   *  ``return r // 13 + 2 // 15``

*  ``return ((luhn.getSum(acc)* 9)+'').slice(-1)``


Casos de ``slice``:  

    '12345'.slice(1,2)       //  2
    '12345'.slice(0,2)       //  12
    '12345'.slice(2,3)       //  3
    '12345'.slice(-1)        //  5
    '12345'.slice(2)         //  345
    '12345'.slice(3)         //  45
    '12345'.slice(-3)        //  345

Casos de ``substring``:   

    '12345'.substring(-2,1)  //  1
    '12345'.substring(-2,3)  //  123
    '12345'.substring(-1)    //  12345
    '12345'.substring(-2,2)  //  12
    '12345'.substring(-3)    //  12345
    '12345'.substring(-3,3)  //  "123"



*  return ((luhn.getSum(acc)* 9)%10)+''



##TAREA:##
Revisar la documentación de mozilla sobre los arreglos en JavaScript [https://developer.mozilla.org/.../Array][fuenteMozillaArrays]  

Hacer ejemplos con los métodos de los arreglos:

*  flter
*  forEach
*  map
*  some
*  reduce
*  reduceRight

Y representarlo con la interfaz de usuario hecha por SAM en este ejemplo:

*  [http://jsbin.com/...][recursoJSbinLuhnInterface]

Y subirlos a su fork del repositorio javascript de vzla.js a esta carpeta:

*  [https://github.com/.../arreglos][recursoGitHubArrays]

El nombre del archivo con el siguiente formato:

*  ``arreglos_por_usuarioDeTwitter.js``


Temas y códigos a tratar la siguiente semana ``(4 / 12 / 2011)``:

*  [https://github.com/.../binary-search.js][resursoGitHubBusqueda]
*  [http://en.wikipedia.org/.../Binary_search_algorithm][fuenteWikipediaBusqueda]

Software de VoiceChat propuesto para usar en la siguiente sesión:

*  [http://www.typefrag.com/.../ventrilo-download/][softwareVentrilo]



[twitterVirginiaSejias]: <https://twitter.com/VirginiaSeijas> (Twitter Josalys Matos)
[twitterDanielRodriguez]: <https://twitter.com/sadasant> (Twitter Daniel Rogriguez)
[twitterCarhilMatos]: <https://twitter.com/krhil> (Twitter Carhil Matos)
[twitterDixonGarcia]: <https://twitter.com/DxnxD> (Twitter Dixon García)
[twitterDanielAubourg]: <https://twitter.com/tristanoff> (Twitter Daniel Aubourg)
[twitterSAM]: <https://twitter.com/alexstefan92> (Twitter Stefan Alexander Meng)
[twitterJoseReyna]: <https://twitter.com/jobliz> (Twitter José Reyna)
[twitterRobertoTatasciore]: <https://twitter.com/robdiminished> (Twitter Roberto Tatasciore)
[twitterAndresBrizuela]: <https://twitter.com/edMugen> (Twitter Andrés Brizuela)
[writtenClassGitHub5]: <https://github.com/sadasant/Venezuela.js/blob/master/algoritmos/suma_de_comprobacion/teoria.md> (Introducción a la 5ta clase)
[fuenteWikipediaLuhn]: <http://en.wikipedia.org/wiki/Luhn_algorithm> (Luhn Algorithm - Wikipedia, the free encyclopedia)
[recursoGitHubLuhnAlgorithm]: <https://github.com/sadasant/computer-science-in-javascript/blob/master/algorithms/checksums/luhn-algorithm> (Ejemplo de código del algoritmo de Luhn)
[fuenteImeiSmsEu]: <http://imei.sms.eu.sk/> (Ejemplo de código en JavaScript del algoritmo de Luhn)
[fuenteWikipediaBaseNumerica]: <http://es.wikipedia.org/wiki/Base_(aritmética)> (Báse Arimética - Wikipedia, la enciclopedia libre)
[fuenteMozillaBreak]: <https://developer.mozilla.org/en/JavaScript/Reference/Statements/break> (Break Statement)
[recursoJSbinLuhnInterface]: <http://jsbin.com/ipotes/14/edit#html,live> (JSbin - Interfáz para probar Luhn)
[codigoGitHubLuhnAlgorithm]: <https://github.com/sadasant/Venezuela.js/blob/master/algoritmos/suma_de_comprobacion/luhn_by_sadasant.js> (Algoritmo Luhn por Sadasant)
[fuenteMozillaReduce]: <https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/Reduce> (Reduce Function)
[fuenteMozillaArrays]: <https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array> (Arrays)
[recursoGitHubArrays]: <https://github.com/sadasant/Venezuela.js/tree/master/ejemplos/arreglos> (Carpeta de arreglos)
[resursoGitHubBusqueda]: <https://github.com/sadasant/computer-science-in-javascript/blob/master/algorithms/searching/binary-search/binary-search.js> (Código en JavaScript de búsqueda en binario)
[fuenteWikipediaBusqueda]: <http://en.wikipedia.org/wiki/Binary_search_algorithm> (Binary Search - Wikipedia, the free encyclopedia)
[softwareVentrilo]: <http://www.typefrag.com/services/ventrilo-download/> (Download Ventlilo)