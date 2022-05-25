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
                    name: '1. Crear tarea'
                }, {
                    value: 2,
                    name: '2. Listar tareas'
                }, {
                    value: 3,
                    name: '3. Listar tareas pendientes'
                }, {
                    value: 4,
                    name: '4. Listar tareas completadas'
                }, {
                    value: 5,
                    name: '5. Completar tarea(s)'
                }, {
                    value: 6,
                    name: '6. Borrar tareas'
                },
                {
                    value: 0,
                    name: '0. Salir'
                }
            ]
        }
    ]

    let answer = await inquirer.prompt(menuOpts)
    return answer;
}

module.exports = {
    inquirerMenu
}