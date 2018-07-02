import React from 'react';
import {render} from 'react-dom';

import Input from '../../components/Input/index.jsx';
import List from '../../components/List/index.jsx';

export default class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            todos: []
        }
    }
    submitFn(value){
        const id = this.state.todos.length
        this.setState({
            todos: this.state.todos.concat({
                id: id,
                text: value
            })
        })
    }
    deleteFn(id){
        let data = this.state.todos
        this.setState({
            todos: data.filter((item)=>{
                if(item.id !==id){
                    return item
                }
            })
        })
    }
    render(){
        return (
            <div>
                <Input submitFn={this.submitFn.bind(this)}></Input>
                <List todos={this.state.todos} deleteFn={this.deleteFn.bind(this)}></List>
            </div>
        )
    }
}