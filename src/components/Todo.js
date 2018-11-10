import React, {Component} from 'react';
import Item from './Item.js';
import Form from './Form.js';

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
            .then(todo => {
              //  console.log(todo);
                return this.setState({todo});
    
            })
    }
    
    render(){
        const list = this.state.todo.map((i) => (
            <Item
                key={i._id}
                {...i}/>
        ));
        console.log(this.state.todo, 'state')
        console.log(list, 'render')
        return (
            <div>
                <h1>Todo</h1>
                <Form/>
                <ul>
                {list}
                </ul>
            </div>
        )
    }
}

export default Todo;