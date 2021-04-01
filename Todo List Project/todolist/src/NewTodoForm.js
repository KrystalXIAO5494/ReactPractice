import React, {Component} from 'react'
import "./NewTodoForm.css"


class NewTodoForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {newTodo: []};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
        this.setState({
            newTodo: [ ...this.state.newTodo, e.target.value],
          }, () => {
            console.log(this.state.newTodo);
          });
    }
  
    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            newTodo: [ ...this.state.newTodo, e.target.value],
          }, () => {
            console.log(this.state.newTodo);
          });
        }
    
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            New Todo
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Add TODO" />
        </form>
      );
    }
}
export default NewTodoForm

