import './styles.css';
import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList();

// todoList.todos.forEach(todo => crearTodoHtml(todo));
// Esta de aqui arriba es exacta a la de abajo por lo que solo tenemos un argumento y se lo estamos mandando a una funcion o metodo

todoList.todos.forEach(crearTodoHtml);



// // Creacion de tareas.
// const tarea = new Todo('Aprender Java Script!!');

// // llamdo de esos todos.
// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml(tarea);

// localStorage.setItem('mi-key', 'ABC1234568');
// sessionStorage.setItem('mi-key', 'ABC1234568');

