import React, {Component} from 'react';
import Post from './post';
var key = 0;
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: `https://www.reddit.com/.json`
        }
        this.hotPost = this.hotPost.bind(this);
        this.newPost = this.newPost.bind(this);
        this.risingPost = this.risingPost.bind(this);
        this.controversialPost = this.controversialPost.bind(this);
        this.topPost = this.topPost.bind(this);
    }
    hotPost() {
        this.setState({url: `https://www.reddit.com/hot/.json`})
        key++
    }
    newPost() {
        this.setState({url: `https://www.reddit.com/new/.json`})
        key++
    }
    risingPost() {
        this.setState({url: `https://www.reddit.com/rising/.json`})
        key++
    }
    controversialPost() {
        this.setState({url: `https://www.reddit.com/controversial/.json`})
        key++
    }
    topPost() {
        this.setState({url: `https://www.reddit.com/top/.json`})
        key++
    }
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <button onClick={this.hotPost}>Hot</button>
                    </li>
                    <li>
                        <button onClick={this.newPost}>New</button>
                    </li>
                    <li>
                        <button onClick={this.risingPost}>Rising</button>
                    </li>
                    <li>
                        <button onClick={this.controversialPost}>Controversial</button>
                    </li>
                    <li>
                        <button onClick={this.topPost}>Top</button>
                    </li>
                </ul>
                <Post key = {key} url={this.state.url}/>
            </div>
        )
    }
}

export default Header
