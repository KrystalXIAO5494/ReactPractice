import React, {Component} from 'react'
import NewTodoForm from './NewTodoForm';
import Todo from './Todo'
import "./TodoList.css"


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          todos: []
        };
        this.create =this.create.bind(this);
        this.remove =this.remove.bind(this);
      }

    create(value){
        this.setState({
            todos:[...this.state.todos,value]
        })
    }

    remove(id){
        this.setState({
            todos:this.state.todos.filter(t =>t.id !==id)
        })
    }
   
    render() {
      const todos = this.state.todos.map(todo =>{
          return<Todo 
          key ={todo.id} 
          task ={todo.task} 
          removeTodo={this.remove}
          id={todo.id}
          />
      })
      return (
        <div>
        <h1>Todo List!</h1>
        <NewTodoForm createTodos={this.create}/>
        <ul>
            {todos}
        </ul>
        </div>
      );
    }
  }
export default TodoList

