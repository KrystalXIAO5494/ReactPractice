import React, {Component} from 'react'
import NewTodoForm from './NewTodoForm';
import Todo from './Todo'
import "./TodoList.css"
import "./Todo.css"


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          todos: []
        };
        this.create =this.create.bind(this);
        this.remove =this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion=this.toggleCompletion.bind(this);
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
    update(id,updatedTask){
        const updatedTodos = this.state.todos.map(todo =>{
            if(todo.id ===id){
                return{...todo, task:updatedTask}
            }
            return todo;
        });
        this.setState({todos:updatedTodos});
    }
    toggleCompletion(id){
      const updatedTodos = this.state.todos.map(todo =>{
        if(todo.id ===id){
            return{...todo, completed:!todo.completed}
        }
        return todo;
    });
    this.setState({todos:updatedTodos});

    }
   
   
    render() {
      const todos = this.state.todos.map(todo =>{
          return<Todo 
          key ={todo.id} 
          task ={todo.task} 
          id={todo.id}
          completed ={todo.completed}
          updateTodo={this.update}
          removeTodo={this.remove}
          toggleTodo ={this.toggleCompletion}
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

