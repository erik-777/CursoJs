try {
    console.log("en esta apartado de coloca el codigo a evaluar");
  // valirable
} catch (error) {
    console.log("en este apartado se capturan los errors del codigo evaluado");
    console.log(error)
}finally{
    console.log("este apartado siempre se va a ejecutar, pase lo que pase");
}