require("colors");
const { inquirerMenu, pausa,leerInput } = require("./helpers/inquirer");
const Tarea = require('./models/tarea')
const Tareas = require('./models/tareas');
const {guardarDB} = require('./helpers/guardarArchivo')

const main = async () => {
  console.clear();

  let tareas = new Tareas();
  let opt = "";
  do{
    opt = await inquirerMenu();
   switch(opt){
     case 1:
      const desc = await leerInput('leer descripcion');
      tareas.crearTarea(desc)
     break;

     case 2:
      console.log(tareas.listadoArr)
     break;
     
   }
   
  //  guardarDB(tareas.listadoArr)
   await pausa()
  }while(opt !== 0);
};

main();
