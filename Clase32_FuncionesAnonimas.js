/**
 * 
    ______                 _                          ___                      _                     
   / ____/_  ______  _____(_)___  ____  ___  _____   /   |  ____  ____  ____  (_)___ ___  ____ ______
  / /_  / / / / __ \/ ___/ / __ \/ __ \/ _ \/ ___/  / /| | / __ \/ __ \/ __ \/ / __ `__ \/ __ `/ ___/
 / __/ / /_/ / / / / /__/ / /_/ / / / /  __(__  )  / ___ |/ / / / /_/ / / / / / / / / / / /_/ (__  ) 
/_/    \__,_/_/ /_/\___/_/\____/_/ /_/\___/____/  /_/  |_/_/ /_/\____/_/ /_/_/_/ /_/ /_/\__,_/____/  
                                                                                                     

 */
// declaracion Clasica
(function () {
  console.log("Primer IIFE");
})();

/**
 * Declaracion segun LA CROCKFORD
 */
(function () {
  console.log("Declaracion segun LA CROCKFORD");
})();
/**
 * Unaria
 */
+(function () {
  console.log("Version Unaria");
})();
/**
 * Facebook
 */
!(function () {
  console.log("Version facebook");
})();
