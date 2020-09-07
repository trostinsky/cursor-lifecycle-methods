import React, {Component} from "react";
import "./likesCounter.css";

const EMPTY_HEART = "./img/heart.svg";
const FULL_HEART = "./img/heart-active.svg";

export default class LikesCounter extends Component {
    state = {
        isActive: false,
        count: 123
    }

    get likesCount(){
        const {isActive} = this.state;
        const {count} = this.props;
        return count + (isActive ? 1 : 0);
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.count.toString().slice(-1) === '0'){
            return true;
        }
        return false;
        // return !(nextProps.count % 10);
    }

    // componentDidMount(){
    //     this.interval = setInterval(this.increaseLikesCount, 5000);
    // }
    //
    // componentWillUnmount(){
    //     clearInterval(this.interval);
    // }

    increaseLikesCount = () => {
        console.log("tick");
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    likeToggle = (e) => {
        this.setState((prevState) => {
            return {
                isActive: !prevState.isActive
            }
        })
    }

    render() {
        const {isActive} = this.state;
        return (
            <div className="likes-wrapper" onClick={this.likeToggle}>
                <div className="likes-count">{this.likesCount}</div>
                <img src={isActive ? FULL_HEART : EMPTY_HEART} alt="" className={`like`}/>
            </div>
        )
    }
}