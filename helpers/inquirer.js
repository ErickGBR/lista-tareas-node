var inquirer = require('inquirer');
require("colors");

const inquirerMenu = async () => {
    let menuOpts = [
        {
            type: 'list',
            name: 'opcion',
            message: 'Que desea hacer?',
            choices: [
                {
                    value: 1,
                    name: `${'1.'.green}  Crear tarea` 
                }, {
                    value: 2,
                    name: `${'2.'.green}  Listar tareas` 
                }, {
                    value: 3,
                    name: `${'3.'.green}  Listar tareas pendientes` 
                }, {
                    value: 4,
                    name: `${'4.'.green}  Listar tareas completadas`
                }, {
                    value: 5,
                    name: `${'5.'.green}  Completar tarea(s)`
                }, {
                    value: 6,
                    name: `${'6.'.green}  Borrar tareas`
                },
                {
                    value: 0,
                    name: `${'0.'.green}  Salir`
                }
            ]
        }
    ]

    let answer = await inquirer.prompt(menuOpts)
    return answer.opcion;
}

const pausa = async (opt)=>{
    // console.clear();
    let question = [
        {
            type:"input",
            name:"enter",
            message :`Presione ${ 'enter'.green} para continuar`
        }
    ]
    await inquirer.prompt(question)
}

const leerInput = async(message)=>{
    let question = [
        {
            type:'input',
            name:'desc',
            message,
            validate(value){
                if(value.length ===0){
                    return "Por favor ingrese un valor"
                }
                return true;
            }
        }
    ]
    const { desc } = await inquirer.prompt(question)
    return desc;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}