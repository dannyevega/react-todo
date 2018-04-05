import React from 'react';
import TodoItems from './TodoItems';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      todoList: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  handleChange = (e) => {
    let value = e.target.value ? e.target.value : '';
    this.setState(() => {
      return {
        value: value
      };
    });
  }
  addTodo = (e) => {
    e.preventDefault();

    if(this.state.value !== '') {
      let newItem = {
        text: this.state.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          todoList: prevState.todoList.concat(newItem),
          value: ''
        };
      });
    }
  }
  removeTodo = (key) => {
    let filteredItems = this.state.todoList.filter(item => {
      return (item.key !== key)
    });

    this.setState({
      todoList: filteredItems
    });
  }

  render() {
    return (
      <div className='container'>
        <h1>Todo List: {this.state.todoList.length}</h1>
        <div className='header'>
          <form onSubmit={this.addTodo}>
            <input 
              value={this.state.value}
              onChange={this.handleChange}
              type='text'
              placeholder='enter task'
            />
            <button type='submit'>add</button>
          </form>          
        </div>
        <TodoItems 
          items={this.state.todoList}
          remove={this.removeTodo}
        />
      </div>
    )
  }
}

export default Todo;