import React, {Component} from 'react'
import NewTodoForm from './NewTodoForm';
import Todo from './Todo'
import "./TodoList.css"


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          todos: [{task:"walk the fish"},{task:"Groom Chickens"}]
        }
      }
   
    render() {
      const todos = this.state.todos.map(todo =>{
          return<Todo task ={todo.task}/>
      })
      return (
        <div>
        <h1>Todo List!</h1>
        <ul>
            {todos}
        </ul>
        </div>
      );
    }
  }
export default TodoList

