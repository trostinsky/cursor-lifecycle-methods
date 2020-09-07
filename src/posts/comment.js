import React, {Component} from "react";

// this.props = { content: '..' }
export default class Comment extends Component{
    state = {
        value: this.props.content
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.content !== prevProps.content){
            this.setState({
                value: this.props.content
            });
        }
    };

    changeValue = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    onBlur = (e) => {
        this.props.onBlur(this.state.value);
    }

    render(){
        return (
            <textarea className="comment-input"
                      value={this.state.value}
                      onChange={this.changeValue}
                      onBlur={this.onBlur}
            />
        )
    }
}