import React from 'react';



class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          itemName: ""
        };
      }

    handleChanges = e =>{
        this.setState({ itemName: e.target.value });
    };

    handleAddItem = e => {
        e.preventDefault();
        this.setState({itemName: ''});
        this.props.addItem(this.state.itemName);
    }

    render(){
        console.log('rendering form');
        return(
            <form onSubmit={this.handleAddItem}>
                <input type="text" 
                name="task"
                value={this.state.itemName}
                onChange={this.handleChanges}
                />
                <button>Add ToDo</button>
            </form>
        );
    }
}

export default TodoForm;