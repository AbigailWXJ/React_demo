import React from 'react'

export default class List extends React.Component {
    clickHandle(id){
        this.props.deleteFn(id)
    }
    render(){
        const data = this.props.todos
        // console.log(data)
        return (
            <ul >
                {data.map((item,index)=>{
                    return <li key={index} onClick={this.clickHandle.bind(this,item.id)}>{item.text}</li>
                })}
            </ul>
        )
    }
}