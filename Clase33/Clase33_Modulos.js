import { Pi } from "./Constantes.js";
// import { restar } from "./Aritmetica.js";
// import { sumar } from "./Aritmetica.js";
import { Aritmetica } from "./Aritmetica.js";
console.log("Modulos en js", Pi);
// console.log("Suma: ", sumar(10, 15));
// console.log("resta: ", restar(10, 5));
console.log(
  "suma: ",
  Aritmetica.sumar(10, 30),
  " Resta: ",
  Aritmetica.restar(100 , 20)
);
