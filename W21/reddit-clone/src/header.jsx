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
                    <li className = 'headerButtons'>
                        <a onClick={this.hotPost}>Hot</a>
                    </li>
                    <li className = 'headerButtons'>
                        <a onClick={this.newPost}>New</a>
                    </li>
                    <li className = 'headerButtons'>
                        <a onClick={this.risingPost}>Rising</a>
                    </li>
                    <li className = 'headerButtons'>
                        <a onClick={this.controversialPost}>Controversial</a>
                    </li>
                    <li className = 'headerButtons'>
                        <a onClick={this.topPost}>Top</a>
                    </li>
                </ul>
                <Post key = {key} url={this.state.url}/>
            </div>
        )
    }
}

export default Header
