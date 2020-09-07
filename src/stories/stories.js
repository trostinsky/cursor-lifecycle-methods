import React, {Component} from "react";
import "./stories.css";
import Story from "./story";
import {CreateStory} from "./createStory";

const user = {
    avatar: 'https://images.pexels.com/photos/97082/weimaraner-puppy-dog-snout-97082.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
}
const storiesMock = [{
    id: 1,
    cover: 'https://images.pexels.com/photos/2553653/pexels-photo-2553653.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    avatar: 'https://images.pexels.com/photos/4828924/pexels-photo-4828924.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    name: 'Dmitry Garbuz'
}, {
    id: 2,
    cover: 'https://images.pexels.com/photos/2553653/pexels-photo-2553653.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    avatar: 'https://images.pexels.com/photos/4828924/pexels-photo-4828924.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    name: 'Dmitry Garbuz'
}, {
    id: 3,
    cover: 'https://images.pexels.com/photos/2553653/pexels-photo-2553653.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    avatar: 'https://images.pexels.com/photos/4828924/pexels-photo-4828924.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    name: 'Dmitry Garbuz'
}, {
    id: 4,
    cover: 'https://images.pexels.com/photos/2553653/pexels-photo-2553653.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    avatar: 'https://images.pexels.com/photos/4828924/pexels-photo-4828924.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    name: 'Dmitry Garbuz'
}, {
    id: 5,
    cover: 'https://images.pexels.com/photos/2553653/pexels-photo-2553653.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    avatar: 'https://images.pexels.com/photos/4828924/pexels-photo-4828924.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    name: 'Dmitry Garbuz'
}];

export default class Stories extends Component {
    state = {
        stories: [...storiesMock], // TODO: remove MOCK
        name: "Default Name",
        cover: 'https://images.pexels.com/photos/3226508/pexels-photo-3226508.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        avatar: 'https://images.pexels.com/photos/5060987/pexels-photo-5060987.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    }

    resetInputs = () => {
        this.setState({
            name: "Default Name",
            cover: 'https://images.pexels.com/photos/3226508/pexels-photo-3226508.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            avatar: 'https://images.pexels.com/photos/5060987/pexels-photo-5060987.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        })
    }

    addStory = () => {
        this.setState((prevState) => {
            return {
                stories: [{
                    name: prevState.name,
                    cover: prevState.cover,
                    avatar: prevState.avatar
                }, ...prevState.stories].slice(0, 5)
            };
        });
        this.resetInputs();
    }

    changeValue = (field, e) => {
        this.setState({
            [field]: e.target.value
        })
    }

    render() {
        return (
            <>
                <div className="stories-wrapper">
                    <CreateStory avatar={user.avatar} addStory={this.addStory}/>
                    {this.state.stories.map((story) => {
                        return (
                            <Story avatar={story.avatar} cover={story.cover} name={story.name} time={10} key={story.id}/>
                        )
                    })}
                </div>
                <button onClick={this.resetInputs}>RESET</button>
                <p>
                    <input value={this.state.name} onChange={this.changeValue.bind(this, "name")}/>
                </p>
                <p>
                    <input value={this.state.avatar} onChange={this.changeValue.bind(this, "avatar")}/>
                </p>
                <p>
                    <input value={this.state.cover} onChange={this.changeValue.bind(this, "cover")}/>
                </p>
            </>
        )
    }
}