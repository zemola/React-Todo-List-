import React from 'react';
import Header from './Header';
import TodoList from './TodoList';

class TodoContainer extends React.Component {
    state = {
      todos: [
        {
          id: 1,
          title: "Setup development enviroment",
          completed: true
        },
        {
          id: 2,
          title: "develop website and add content",
          completed: false
        },
        {
          id: 3,
          title: "Deploy to live server",
          completed: false
        }
      ]
    }
    render() { 
        return <div>
        <Header />
        <TodoList todos={this.state.todos} />
        </div>;
    }
}
 
export default TodoContainer;