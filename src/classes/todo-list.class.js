import { Todo } from "./todo.class";


export class TodoList {

    constructor() {

        // this.todos = [];
        this.cargarTodosLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarEnLocalStorage();
    }

    eliminarTodo(id) {

        this.todos = this.todos.filter(todo => todo.id != id)
        
        this.guardarEnLocalStorage();
        
    }

    marcarCompletado(id) {
        
        for (const todo of this.todos) {
           

            if (todo.id == id) {
                
                todo.completado = !todo.completado;
                this.guardarEnLocalStorage();
                break;


            }
        }
        
    }

    eliminarCompletados() {
        
        this.todos =this.todos.filter(todo => !todo.completado)
        this.guardarEnLocalStorage();

    }

    guardarEnLocalStorage() {
        
        localStorage.setItem('todo', JSON.stringify(this.todos) );


    }



    cargarTodosLocalStorage(){

        // if (localStorage.getItem('todo')) {
        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        //     console.log('CargarLocal:', this.todos);

        // } else {
        //     this.todos = [];
        // }


        // Aca abajo tenemos lo mismo de arriba pero con un operador ternario

        this.todos = (localStorage.getItem('todo'))
            ? JSON.parse(localStorage.getItem('todo'))
            : [];
        
        this.todos = this.todos.map(Todo.fromJson);

    }

}