/**
 * 
    ___         _                             _      
   /   |  _____(_)___  ______________  ____  (_)___ _
  / /| | / ___/ / __ \/ ___/ ___/ __ \/ __ \/ / __ `/
 / ___ |(__  ) / / / / /__/ /  / /_/ / / / / / /_/ / 
/_/  |_/____/_/_/ /_/\___/_/   \____/_/ /_/_/\__,_/  
                                                     

 */

/**
 * recibe una callback y recibe un tiempo expresado en milisegundos que seria el tiempo
 * pasado para ejecutar
 * es decir solo se ejecuta una sola vez
 */
let timeout = setTimeout(() => {
  console.log("Estoy Utilizando un SetTime");
}, 1000);

/**
 * Funcion de anulacion del setTimeout
 */
clearTimeout(timeout);
/**
 * recibe una callback y el tiempo que va a esperar para luego volver a ejecutarce
 * se ejecuta indefinidamente cada cierto tiempo
 */

let interval = setInterval(() => {
  console.log("Estoy utilizando un setInterval");
}, 100);
/**
 * funcion de anulacion del SetInterval
 */
clearInterval(interval);
