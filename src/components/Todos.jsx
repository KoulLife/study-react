import React, {Component} from 'react';

class Todos extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo,idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
    );
  }
}

export default Todos;