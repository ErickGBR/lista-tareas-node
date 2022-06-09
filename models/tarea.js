const { v4: uuidv4 } = require('uuid');

class Tarea{

    id = "";
    desc = "";
    terminarEn = null;

    constructor (desc){
        this.id = uuidv4();
        this.desc = desc;
        this.terminarEn = null;
    }

}

module.exports = Tarea;