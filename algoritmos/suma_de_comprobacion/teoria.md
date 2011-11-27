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
        tales como números de tarjetas de crédito, cédulas, etc.

    Este algoritmo detectará cualquier error de un dígito, así como casi cualquier transposición
        de dígitos adjacentes, sin embargo fallará si se encuentra con una de las siguientes
        situaciones:

    - Si se cambia el orden de dos dígitos del número a analizar. Ejemplo: 09 ↔ 90.
    - Si se reemplazan alguna de las siguientes combinaciones: 22 ↔ 55, 33 ↔ 66, 44 ↔ 77.

### Referencias:

- [CheckSum en Wikipedia (Ingles)](http://en.wikipedia.org/wiki/Checksum).
- [Suma de verificación en Wikipedia (Español)](http://es.wikipedia.org/wiki/Suma_de_verificaci%C3%B3n).
- [Algoritmo Luhn (Ingles)](http://en.wikipedia.org/wiki/Luhn_algorithm).
