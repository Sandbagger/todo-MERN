import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {input:'test'};
    }
    render() {
        return (
            <div>
             <input 
             type="text" 
             value ={this.state.input}/>
             <button>Add to list</button>
            </div>
        )
    }
}

export default Form;