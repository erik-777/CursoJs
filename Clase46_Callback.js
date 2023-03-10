/**
 * 
   ______      ______               __  
  / ____/___ _/ / / /_  ____ ______/ /__
 / /   / __ `/ / / __ \/ __ `/ ___/ //_/
/ /___/ /_/ / / / /_/ / /_/ / /__/ ,<   
\____/\__,_/_/_/_.___/\__,_/\___/_/|_|  
                                        

 */

function cuadrado(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 1000));
}
cuadrado(10, (value, result) => {
  console.log("inica Callback");
  console.log(`callback resultado: ${value}, : ${result}`);
  cuadrado(20, (value, result) => {
    console.log("inica Callback");
    console.log(`callback resultado: ${value}, : ${result}`);
    cuadrado(30, (value, result) => {
      console.log("inica Callback");
      console.log(`callback resultado: ${value}, : ${result}`);
      cuadrado(40, (value, result) => {
        console.log("inica Callback");
        console.log(`callback resultado: ${value}, : ${result}`);
        cuadrado(50, (value, result) => {
          console.log("inica Callback");
          console.log(`callback resultado: ${value}, : ${result}`);
        });
        console.log("fin del callback");
        console.log("Callback hell!!!!!!!!");
        console.log("http://callbackhell.com/");
      });
    });
  });
});
