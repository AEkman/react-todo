import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layouts/Header';
import AddTodo from './components/todos/AddTodo'
import Todos from './components/todos/Todos';
import About from './components/pages/About';
// import { v4 as uuid } from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
  }

  // state = {
  //   todos: [
  //     {
  //       id: uuid(),
  //       title: 'Clean bathrom',
  //       completed: false,
  //     },
  //     {
  //       id: uuid(),
  //       title: 'Buy groceries',
  //       completed: false,
  //     },
  //     {
  //       id: uuid(),
  //       title: 'Feed fish',
  //       completed: true,
  //     },
  //   ],
  // }

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      res => this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      }))
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(
      res => this.setState({ todos: [...this.state.todos, res.data] }))
  }

  render() {
    return (
      <Router>
        <div className='app'>
          <div className='container'>
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
