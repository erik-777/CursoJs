/**
 * objeto console
 */
console.log(console);

console.error("error");
/**
 * Ver el tiempo de ejecucion de una parte del codigo
 *
 */

const arreglo = Array(100);

console.time("Ciclo");
for (let i = 0; i < arreglo.length; i++) {
  arreglo[i] = i;
}
console.timeEnd("Ciclo");
console.table(arreglo);
