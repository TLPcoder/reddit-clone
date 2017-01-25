import React, {Component} from 'react';
import Scoring from './scoring'
class CreatePost extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var redditData = this.props.data;
        if (redditData.thumbnail === 'default' || redditData.thumbnail === 'image' || redditData.thumbnail === 'self' || redditData.thumbnail === 'nsfw') {
            return (
                <div className = "post">
                    <img src='https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/8/005/090/289/3ca32fd.jpg' alt="" height="200px" width="200px"/>
                    <p>{redditData.title}</p>
                    <Scoring data = {redditData}/>
                </div>
            )
        }
        return (
            <div className = "post">
                <img src={redditData.thumbnail} alt="" height="200px" width="200px"/>
                <p>{redditData.title}</p>
                <Scoring data = {redditData}/>
            </div>
        )
    }
}

export default CreatePost
