import React, {Component} from 'react';
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [],
    todoValue: ""
  }
  render() {
    return (
      <>
        <div>
          <input
            type="text"
            value={this.state.todoValue}
            onChange={(e) => {
              this.setState({
                todoValue: e.target.value
              })
            }}
          />
          <button onClick={() => {
            (this.state.todoValue !== "")&&
            this.setState({
              todos: [...this.state.todos, this.state.todoValue]
            })
          }}>
            ADD
          </button>
        </div>

        <Todos todos={this.state.todos}/>
      </>
    );
  }
}

export default App;