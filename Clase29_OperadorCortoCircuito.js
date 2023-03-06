/**
 * 
   ____                            __              ______           __           _______                 _ __      
  / __ \____  ___  _________ _____/ /___  _____   / ____/___  _____/ /_____     / ____(_)___________  __(_) /_____ 
 / / / / __ \/ _ \/ ___/ __ `/ __  / __ \/ ___/  / /   / __ \/ ___/ __/ __ \   / /   / / ___/ ___/ / / / / __/ __ \
/ /_/ / /_/ /  __/ /  / /_/ / /_/ / /_/ / /     / /___/ /_/ / /  / /_/ /_/ /  / /___/ / /  / /__/ /_/ / / /_/ /_/ /
\____/ .___/\___/_/   \__,_/\__,_/\____/_/      \____/\____/_/   \__/\____/   \____/_/_/   \___/\__,_/_/\__/\____/ 
    /_/                                                                                                            

 */
/**
 * Con el operador lógico OR, si el primer valor se devuelve como verdadero,
 * el segundo nunca será evaluado y el primer operando será devuelto.
 *
 */

function saludar(nombre) {
  // esto es un corto Circuito
  nombre = nombre || "Eres un desconocido";
  console.log(`hola, ${nombre}`);
}
saludar();
saludar("Erik");

console.log("cadena" || "valor de la derecha");
console.log(10 || "valor de la derecha");
console.log({} || "valor de la derecha");
console.log([] || "valor de la derecha");
console.log(true || "valor de la derecha");
// Valores que tienden a falso
console.log(undefined || "valor de la derecha");
console.log(null || "valor de la derecha");
console.log(false || "valor de la derecha");

/**
 * Con el operador lógico AND, si el primer operando se devuelve como falso,
 * el segundo nunca será evaluado y se devolverá el primer operando.
 */
console.log("cadena" && "valor de la derecha");
console.log(10 && "valor de la derecha");
console.log({} && "valor de la derecha");
console.log([] && "valor de la derecha");
console.log(true && "valor de la derecha");
// Valores que tienden a falso
console.log(undefined && "valor de la derecha");
console.log(null && "valor de la derecha");
console.log(false && "valor de la derecha");