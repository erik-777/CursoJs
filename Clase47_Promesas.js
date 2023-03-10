/**
 * 
    ____                                           
   / __ \_________  ____ ___  ___  _________ ______
  / /_/ / ___/ __ \/ __ `__ \/ _ \/ ___/ __ `/ ___/
 / ____/ /  / /_/ / / / / / /  __(__  ) /_/ (__  ) 
/_/   /_/   \____/_/ /_/ /_/\___/____/\__,_/____/  
                                                   

 */

/**
 * las promesas aparecen como sulucion a la callback hell
 *
 * las promesar utilizan dos recursos el resolved y reject
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

cuadrado(10)
  .then((res) => {
    console.log(`Valor: ${res.value} : Resultado: ${res.result}`);
    return cuadrado(20);
  })
  .then((res) => {
    console.log(`Valor: ${res.value} : Resultado: ${res.result}`);
    return cuadrado(30);
  })
  .then((res) => {
    console.log(`Valor: ${res.value} : Resultado: ${res.result}`);
    console.log("fin de las promesas");
    return cuadrado("amor");
  })
  .then((res) => {
    console.log(`Valor: ${res.value} : Resultado: ${res.result}`);
    console.log("fin de las promesas");
  })
  .catch((err) => {
    console.error(err);
  });
