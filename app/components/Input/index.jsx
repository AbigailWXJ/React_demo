import React from 'react'

export default class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            value: ''
        }
    }
    Changehandle(e){
        // 实时同步数据
        this.setState({value: e.target.value})
        // console.log(this.state.value)
    }
    KeyUpHandele(e){
        const value=this.state.value
        if(e.keyCode===13 && value.trim()){
            //提交并清空数据
            this.props.submitFn(value)
            this.setState({value: ''})
        }
    }
    render(){
        return (
            <input
            style={{width: '100%', height: '40px', fontSize: '35px'}}
            value={this.state.value}
            onChange={this.Changehandle.bind(this)}
            onKeyUp={this.KeyUpHandele.bind(this)}/>
        )
    }
}