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
}
/**
 * creacion de nuevos objetos
 */
const pepa = new Animal("Pepita", "Hembra"),
  pipe = new Perro("Pipe", "macho", "Grande");

pipe.ladrar();
pipe.saluda();
console.log(pepa);
console.log(pipe);
