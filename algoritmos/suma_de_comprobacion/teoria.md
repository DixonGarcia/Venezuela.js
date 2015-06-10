##### vzla.js :: Algoritmos
## Suma de comprobación

Suma de comprobación (o suma de verificación, en inglés se le llama *Checksum*)
    es una técnica que verificar la integridad de datos, utilizada para evitar
    errores accidentales durante la transferencia, transmisión o almacenamiento
    de datos.

[![Wikipedia: Checksum](http://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Checksum.svg/330px-Checksum.svg.png)](http://en.wikipedia.org/wiki/File:Checksum.svg)

Para que esta técnica funcione, hace falta diseñar dos algoritmos, uno que nos permita
    tomar los datos antes de ser enviados y generar otro que sea significativamente
    más sencillo de transportar, y otro que permita verificar la validez de los datos
    recibidos utilizando el dato más pequeño.

Algunos algoritmos son:

### 1. Algoritmo Luhn.

Se trata de una fórmula utilizada para validar una grán variedad de números de identificación
    tales como números de tarjetas de crédito, cédulas, etc. Se encarga de verificar si una secuencia
    de dígitos de cualquier cantidad, pero base 10 (solo funciona con números de esta base), es válida
    comparada con su número de verificación (ubicado a la final de la secuencia).
    Este número lo podremos obtener realizando los siguientes pasos:

- Multiplcia por dos (dobla) todos los números de posición **impar**, partiendo desde el último número
    a la derecha.
- Si alguno de los números doblados es mayor **9**, se le resta 9.
- Suma todos los números, luego multiplicalos por **9**.
- El número de verificación será el último dígito
    del resultado de esa multiplicación.

Ejemplo, para el número *7992739871*:

    [  7,  9,  9,  2,  7,  3,  9,  8,  7,  1 ]
    [  7, 18,  9,  4,  7,  6,  9, 16,  7,  2 ] // Doblamos a los números de posición impar desde la derecha.
    [  7,  9,  9,  4,  7,  6,  9,  7,  7,  2 ] // A los mayores a 9 se les resta 9.
    [ 67 ] // Sumamos
    [ 603 ] // Multiplicamos por 9
    [ 3 ] // El número de verificación.

Por consiguiente, el número que podrá ser verificado será: 7992739871**3**.

Para verificar un número se deben realizar los siguientes pasos:

- Multiplica por dos (dobla) todos los números de posición **par**, partiendo desde el último dígito a la derecha.
- Si alguno de los números doblados es mayor a **9**, se le resta 9.
- Suma todos los números, si el resultado es divisible entre 10, entonces el número es válido.

Ejemplo, para el número *7992739871**3***:

    [  7,  9,  9,  2,  7,  3,  9,  8,  7,  1,  3 ]
    [  7, 18,  9,  4,  7,  6,  9, 16,  7,  2,  3 ] // Doblamos a los números de posición par desde la derecha.
    [  7,  9,  9,  4,  7,  6,  9,  7,  7,  2,  3 ] // A los mayores a 9 se les resta 9.
    [ 70 ] // Sumamos
    [ 0 ] // El módulo entre 10
    // El número es válido

En este directorio podrán encontrar algunas implementaciones de este algoritmo hechas por nuestros colaboradores,
    también pueden probarlos en vivo:
- <http://jsfiddle.net/sadasant/yPJEL/>

Este algoritmo detectará cualquier error de un dígito, así como casi cualquier transposición
    de dígitos adjacentes, sin embargo fallará si se encuentra con una de las siguientes
    situaciones:

- Si se cambia el orden de dos dígitos del número a analizar. Ejemplo: 09 ↔ 90.
- Si se reemplazan alguna de las siguientes combinaciones: 22 ↔ 55, 33 ↔ 66, 44 ↔ 77.

### Referencias:

- [CheckSum en Wikipedia (Ingles)](http://en.wikipedia.org/wiki/Checksum).
- [Suma de verificación en Wikipedia (Español)](http://es.wikipedia.org/wiki/Suma_de_verificaci%C3%B3n).
- [Algoritmo Luhn (Ingles)](http://en.wikipedia.org/wiki/Luhn_algorithm).
