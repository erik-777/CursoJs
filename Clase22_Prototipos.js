/**
 * POO
 *  Clases: es un modelo a seguir
 *  objetos: es una instancia de una clase
 *  Atributos: Caractaristicas de un objeto
 *  Metodos: son funciones de un objeto
 */
// const animal ={
//     nombre: "perro",
//     sonar(){
//         console.log("gua gua")
//     }
// }
// console.log(animal)

/**
 * Funcion Constructora
 */
function Animal(nombre, genero) {
  this.nombre = nombre;
  this.genero = genero;
  this.sonar = function () {
    console.log("guau guau");
  };
}
console.log(Animal)
