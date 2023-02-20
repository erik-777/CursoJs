/**
 * Metodos Getters y Setter
 */

/**
 * Definiicon de la clase
 */
class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  /**
   * Defini de los metodos de la clase
   */
  sonar() {
    console.log("estoy sonando");
  }
  saluda() {
    console.log(`hola me llamo ${this.nombre}`);
  }
  /**
   * Definicion de un metodo statico
   */
  static queEres() {
    console.log("soy un perro y hago parte  de los caninos");
  }
}

class Perro extends Animal {
  /**
   * el metodo constructor es un metodo que se ejecuta en el momento de instanciar la clase
   * @param {*} nombre
   * @param {*} genero
   * @param {*} tamanio
   */
  constructor(nombre, genero, tamanio) {
    super(nombre, genero);
    this.tamanio = tamanio;
    this.raza = null;
  }
  /**
   * Definicion de metodos
   */
  sonar() {
    console.log("Mi sonido es un ladrido");
  }
  ladrar() {
    console.log("guau guau");
  }
  /**
   * Definicion de un metodo get
   */
  get getRaza() {
    return this.raza;
  }
  /**
   * Definicion de un metodo Set
   */
  set setRaza(raza) {
    this.raza = raza;
  }
}
/**
 * creacion de nuevos objetos
 */
const pepa = new Animal("Pepita", "Hembra"),
  pipe = new Perro("Pipe", "macho", "Grande");

pipe.ladrar();
pipe.saluda();
// console.log(pepa);
// console.log(pipe);
/**
 * Atraves de  los metodos estaticos en js puedes llamarlos sin necesidad de crear un objeto de esa clase
 */
Perro.queEres();

/**
 * Llamado de los metodos Getter y Setters, los cuales deben ser llamados como propiedades
 */

console.log(Perro.getRaza);
/**
 * Estos medotos se deben trabajar en js como si fueran una propiedad del la instancia
 */
// Perro.setRaza("Pitbull"); Llamado erroneo
Perro.setRaza = "Pitbull";

console.log(Perro.getRaza);
console.log(Perro);
console.log(Perro.getRaza);
