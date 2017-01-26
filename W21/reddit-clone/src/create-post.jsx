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
                <div className="post">
                    <div className="row">
                        <div className="col m12">
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src='../images/reddit.png' alt="" height="200px" width="200px"/>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <p>Author: {redditData.author}</p>
                                        <p>Title: {redditData.title}</p>
                                    </div>
                                    <div className="card-action">
                                        <Scoring data={redditData}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="post">
                <div className="row">
                    <div className="col m12">
                        <div className="card horizontal">
                            <div className="card-image">
                                <img src={redditData.thumbnail} alt="" height="200px" width="200px"/>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <p>Author: {redditData.author}</p>
                                    <p>Title: {redditData.title}</p>
                                </div>
                                <div className="card-action">
                                    <Scoring data={redditData}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePost
