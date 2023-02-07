/**
 * Objetos Literales :es una nueva forma de escribir atributos y medotos
 */

let nombre = "venus",
  edad = 7;

const perro = {
  nombre: nombre,
  edad: edad,
  raza: "pitbull",
  ladrar: function () {
    console.log("Guaguau...Guaguau");
  },
};
console.log(perro);
perro.ladrar();

const dog = {
  nombre,
  edad,
  raza: "mestizo",
  ladrar() {
    console.log("Guaguau...GuaguauGuaguau...Guaguau");
  },
};
console.log(dog);
dog.ladrar();

