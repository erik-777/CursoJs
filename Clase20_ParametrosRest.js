/**
 * Parametros Rest
 */
function sumar(a, b, ...c) {
  let resultado = a + b;
  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
}
console.log(sumar(1, 2, 3, 590));

/**
 * OPERADOR DE PROPAGACION Spread operator
 * Se puede ejecutar en cualquier sentencia del codigo
 */

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 0];
console.log(array1, array2);

//const array3 = [array1,array2];
const array3 = [...array1, ...array2];
console.log(array3);

function simpleArraySum(ar) {
  const array2 = [...ar];
  console.log(array2);
  let resultad;
  array2.forEach(function (n) {
    console.log(n);
    resultad = resultad + n;
    console.log(resultad);
  });
  return console.log(resultad);
}
simpleArraySum(array1);
