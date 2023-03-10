//Condicionales
function escribir(text) {
  console.log(text);
}
function Separador(name) {
  console.log(`#####################${name}#########################`);
}
exports.Separador = Separador;
let edad = 19;
if (edad > 16) {
  console.log("eres mayor de edad");
} else {
  console.log("eres menor de edad");
}
Separador("Uso del operador Ternario");
let estado = edad > 18 ? "mayor de edad" : "Menor de edad";
escribir(estado);
Separador("uso del Switch - Case");
switch (estado) {
  case "mayor de edad":
    escribir("Puede entras a la disco");
    break;
  case "Menor de edad":
    escribir("no puedes ingresar a la disco");
    break;
  default:
    escribir("Este es le uso de switch - case");
    break;
}
