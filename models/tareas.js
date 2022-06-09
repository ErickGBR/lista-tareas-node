let Tarea = require('./tarea');


class Tareas {
    _listado ={}
    get listadoArr(){
        let lista = [];

        Object.keys(this._listado).forEach(key => {
            // console.log(key);
            let tarea = this._listado[key];
            lista.push(tarea)
        })
        return lista;
    }
    constructor (){
        this._listado = {}
    }
    crearTarea (desc =''){
        let tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
}
module.exports = Tareas;