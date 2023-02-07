// Uso de los Ciclos
// let cont = 0;
// while (cont < 10) {
//   console.log(cont);
//   cont++;
// }

//uso del for

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// uso del for in
// permite recorrer cada una de las propiedades de un objeto
const obj = [
  { id: 1, nombre: "erik", apellido: "Vergara" },
  { id: 2, nombre: "martin", apellido: "Vergara" },
  { id: 3, nombre: "erik", apellido: "Vergara" },
  { id: 4, nombre: "erik", apellido: "Vergara" },
];

for (const propiedad in obj) {
  console.log(propiedad);
  console.log(`Key: ${propiedad}, Value:${obj[propiedad]}`);
}
/**
 * for of : permite recorrer cada uno de los elemento de cualquier objeto que sea iterable
 */
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99];
for (const iterator of obj) {
  if (iterator.nombre == "erik") {
    iterator.nombre = "david";
  }
  console.log(iterator);
}
console.log(obj);
