require("colors");

const mostrarMenu = () => {
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
    switch (opcion) {
      case "1":
        crearTarea();
        break;
      case "2":
        listarTareas();
        break;
      case "3":
        listarTareasCompletadas();
        break;
      case "4":
        listarTareasPendientes();
        break;
      case "5":
        completarTareas();
        break;
      case "6":
        eliminarTarea();
        break;
      case "0":
        console.log("Saliendo...");
        readLine.close();
        break;
      default:
        console.log("Opcion no valida");
        mostrarMenu();
        break;
    }
  });
};

const pausa = () => {
  console.log("Presione cualquier tecla para continuar...");
  const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readLine.question("", () => {
    mostrarMenu();
  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
