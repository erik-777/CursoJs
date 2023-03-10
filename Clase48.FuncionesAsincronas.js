/**
 * 
    ______                 _                          ___         _                                       
   / ____/_  ______  _____(_)___  ____  ___  _____   /   |  _____(_)___  _________  _________  ____ ______
  / /_  / / / / __ \/ ___/ / __ \/ __ \/ _ \/ ___/  / /| | / ___/ / __ \/ ___/ __ \/ ___/ __ \/ __ `/ ___/
 / __/ / /_/ / / / / /__/ / /_/ / / / /  __(__  )  / ___ |(__  ) / / / / /__/ /_/ / /  / / / / /_/ (__  ) 
/_/    \__,_/_/ /_/\___/_/\____/_/ /_/\___/____/  /_/  |_/____/_/_/ /_/\___/\____/_/  /_/ /_/\__,_/____/  
                                                                                                          

Esperan que algo se cumpla para ejecutar el procesos
 */

function cuadrado(value) {
  if (typeof value !== "number") {
    return Promise.reject(`Erro, el valor ingresado no es un numero: ${value}`);
  }
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}
/**
 * Funcion Asincrona Declarada
 */

async function ASCuadrado() {
  try {
    console.log("inicion de la funcion asincrona");
    let cuadra = await cuadrado(10);
    console.log(`Async funtion: ${cuadra.value} : ${cuadra.result}`);
    cuadra = await cuadrado(209);
    console.log(`Async funtion: ${cuadra.value} : ${cuadra.result}`);
    cuadra = await cuadrado(30);
    console.log(`Async funtion: ${cuadra.value} : ${cuadra.result}`);
    cuadra = await cuadrado("30");
    console.log(`Async funtion: ${cuadra.value} : ${cuadra.result}`);
  } catch (err) {
    console.log(err);
  }
}
ASCuadrado();

/**
 * Funcion Asincrona Expresada
 */

const ASCuadradoExpre = async () => {
  try {
    console.log("inicion de la funcion asincrona expresada");
    let cuadra = await cuadrado(10);
    console.log(`Async funtion: ${cuadra.value} : ${cuadra.result}`);
    cuadra = await cuadrado(209);
    console.log(`Async funtion: ${cuadra.value} : ${cuadra.result}`);
    cuadra = await cuadrado(30);
    console.log(`Async funtion: ${cuadra.value} : ${cuadra.result}`);
    cuadra = await cuadrado("30");
    console.log(`Async funtion: ${cuadra.value} : ${cuadra.result}`);
  } catch (err) {
    console.log(err);
  }
};
ASCuadradoExpre();
