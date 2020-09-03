import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class TodoItem extends Component {
  getCardStyle = () => {
    return {
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
      transition: '0.3s',
      padding: '5px',
      borderRadius: "3%",
      width: '150px',
      height: 'auto',
      background: '#f5f5f5',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={cardWrapperStyle}>
        <div style={this.getCardStyle()}>
          <input type="checkbox" checked={this.props.todo.completed} onChange={this.props.toggleComplete.bind(this, id)} />
          <button onClick={this.props.deleteTodo.bind(this, id)} style={deleteButtonStyle}>x</button>
          <p>{title}</p>
        </div>
      </div >
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

const cardWrapperStyle = {
  float: 'left',
  margin: '10px 0px',
  padding: '0px 10px 0px 0px'
}

const deleteButtonStyle = {
  background: "#e4e4e4",
  color: "#fff",
  border: "none",
  padding: "1px 3px",
  borderRadius: "20%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
