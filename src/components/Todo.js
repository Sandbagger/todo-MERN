import React, {Component} from 'react';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo: []
        }
    }

    componentWillMount(){
        fetch('http://localhost:3000/api/todos')
        .then(res => res.json())
        .then(todos => this.setState({todos}))
    }
    
    render(){
        return (
            <h1>Todo</h1>
        )
    }
}

export default Todo;