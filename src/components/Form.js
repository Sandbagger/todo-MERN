import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {input:'test'};
    }

    handleInput = e => this.setState({input: e.target.value});

    handleSubmit = e => console.log('Submit', this.state.input)
    
    render() {
        return (
            <div>
             <input 
             type="text" 
             value ={this.state.input}
             onChange={this.handleInput}/>
             <button>Add to Todo</button>
            </div>
        )
    }
}

export default Form;