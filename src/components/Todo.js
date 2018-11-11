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
    
    postTodo = (t) => console.log('Todo POST', t)


    render(){
        const list = this.state.todo.map((i) => (
            <Item
                key={i._id}
                {...i}/>
        ));
        console.log(this.state.todo, 'state')
        
        return (
            <div>
                <h1>Todo</h1>
                <Form 
                    postTodo={this.postTodo}/>
                <ul>
                {list}
                </ul>
            </div>
        )
    }
}

export default Todo;