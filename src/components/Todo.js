import React, {Component} from 'react';
import Item from './Item.js';
import Form from './Form.js';
const url = 'http://localhost:3000/api/todos';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo: []
        }
    }

    componentWillMount(){
        fetch(url)
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
                console.log(todo);
                return this.setState({todo});
    
            })
    }
    
    postTodo = (t) => {
        console.log('Todo POST', t)
        fetch(url,{
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({name: t})
        })
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
            .then(t => {
              //  console.log(todo);
                return this.setState({todo: [...this.state.todo, t]});
            })
    }

    toggleDone = () => {
       return console.log("Done!");
    }


    render(){
        const list = this.state.todo.map((i) => (
            <Item
                key={i._id}
                {...i}
                onClick = {this.toggleDone}
                />
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