function Animal(nombre, genero) {
  this.nombre = nombre;
  this.genero = genero;
}
Animal.prototype.saludar = function () {
  console.log("Hola Soy un Animal");
};
Animal.prototype.correr = function () {
  console.log("estoy corriendo");
};

const venus = new Animal("venus", "Hembra");

venus.saludar();

// herencia prototipica

function Perro(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}
// perro hereda de animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;
// sobre escritura de metodos del prototipo padre en el hijo
Perro.prototype.sonar = function () {
  console.log("soy un perroo");
};
Perro.prototype.ladrar = function () {
  console.log("guaaaa guaaaa guaaaas");
};

const zeus = new Perro("zeus", "macho", "grande");
zeus.ladrar();
zeus.sonar();
