
export class Todo {

    static fromJson({id,tarea,completado, creado}) {

        const tempTodo            = new Todo(tarea);
              tempTodo.id         = id;
              tempTodo.completado = completado;
              tempTodo.creado     = creado; 

        return tempTodo;
    }


    constructor(tarea) { // Entonces cada vez que yo cree una tarea le indico que lo que necesito hacer y el me creara todo lo que tengo abajo 

        this.tarea = tarea;

        this.id             = new Date().getTime();
        this.completado     = false; // ME dice ci la tarea ya esta hecha o no
        this.creado         = new Date(); // Me dice la fecha en la que la tarea fue creada.
    }

    imprimirClase() {
        console.log(`${this, tarea} - ${this.id}`);
    }

}   