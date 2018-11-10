import React, {Component} from 'react';
import Item from './Item.js';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo: []
        }
    }

    componentWillMount(){
        fetch('http://localhost:3000/api/todos')
        .then(res => {
            if(!res .ok){
                if(res.status >= 400 && res.status < 500) {
                   return res.json().then(data => {
                       let err = {error: data.message};
                       throw err;
                   })
                } else {
                    let err = {error: 'Sorry, the server is not responding. Please try again later.'}
                    throw err;
                }
            }
                return res.json();
            })
            .then(todos => {
               // console.log(todos);
                return this.setState({todos});
    
            })
    }
    
    render(){
        const list = this.state.todo.map(i => (
            <Item
                key={i._id}
                {...i}/>
        ));
        return (
            <h1>Todo</h1>
        )
    }
}

export default Todo;