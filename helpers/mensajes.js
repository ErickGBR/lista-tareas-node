require("colors");

const mostrarMenu = () => {

  return new Promise (resolve => {
    console.clear();
    console.log("========================".green);
    console.log("Seleccione una opcion:".green);
    console.log("========================\n".green);
  
    console.log(`${"1.".green} Crear tarea`);
    console.log(`${"2.".green} Listar tareas`);
    console.log(`${"3.".green} Listar tareas completadas`);
    console.log(`${"4.".green} Listar tareas pendientes`);
    console.log(`${"5.".green} Completar tarea(s)`);
    console.log(`${"6.".green} Eliminar tarea`);
    console.log(`${"0.".green} Salir \n`);
  
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    readLine.question("Opcion: ", (opcion) => {

      resolve(opcion);
    });
    
  })
  
};

const pausa = () => {
  return new Promise (resolve => {
  console.log("Presione cualquier tecla para continuar...");
  
  const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readLine.question("", () => {
    
    resolve();
  });
  })
};

module.exports = {
  mostrarMenu,
  pausa,
};
