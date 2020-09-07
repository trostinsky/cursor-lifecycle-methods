import React from 'react';
import Stories from "./stories/stories";
import LikesCounter from "./likes/likesCounter";
import Posts from "./posts/posts";

class App extends React.Component {
    render() {
        return (
            <div>
                {/*<Stories/>*/}
                {/*<LikesCounter />*/}
                <Posts />
            </div>
        )
    }
}

export default App;
