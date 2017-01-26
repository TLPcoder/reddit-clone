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
                <nav className = 'header  transparent'>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">Treddit</a>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <a onClick={this.hotPost}>Hot</a>
                            </li>
                            <li>
                                <a onClick={this.newPost}>New</a>
                            </li>
                            <li>
                                <a onClick={this.risingPost}>Rising</a>
                            </li>
                            <li>
                                <a onClick={this.controversialPost}>Controversial</a>
                            </li>
                            <li>
                                <a onClick={this.topPost}>Top</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div id='postContainer'>
                    <Post key={key} url={this.state.url}/>
                </div>
            </div>
        )
    }
}

export default Header
