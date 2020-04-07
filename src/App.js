import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import '../src/components/styles.css';



const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks //tasks: tasks
    };
  }

  toggleCompleted = itemId => {
    //Delete consolelog
    console.log('cw: index.js: App: toggleCompleted: itemId: ', itemId);
    this.setState({
      tasks: this.state.tasks.map(item => {
        if(item.id === itemId) {
          return{
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };
  
  addItem = itemName => {
    this.setState({
      tasks: [
        ...this.state.tasks, 
        {
          task:itemName, 
          completed: false, 
          id: Date.now() 
        }
      ]
    });
  };

  clearCompleted = () => {
    console.log('cw: index.js: App: clearCompleted');
    this.setState({
      tasks: this.state.tasks.filter(item => {
        return !item.completed;
      })
    });
    };


  render() {
    return (
      <div className="App">
        <div className="header">
        <h2>To Do List</h2>
        <TodoForm addItem={this.addItem} />
        </div>
        <TodoList 
        tasks={this.state.tasks} 
        toggleCompleted={this.toggleCompleted}
        clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
