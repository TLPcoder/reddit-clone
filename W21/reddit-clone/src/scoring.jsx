import React, {Component} from 'react';

class Scoring extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.data.ups
        }
        this.max = this.props.data.ups + 1;
        this.min = this.props.data.ups - 1;
        this.handleClickUp = this.handleClickUp.bind(this);
        this.handleClickDown = this.handleClickDown.bind(this);
    }
    handleClickUp(event) {
        if(this.state.likes < this.max){
            this.setState({
                likes: this.state.likes + 1
            })
        }
    }
    handleClickDown(event) {
        if(this.state.likes > this.min){
            this.setState({
                likes: this.state.likes - 1
            })
        }
    }
    render() {
        var redditData = this.state.likes
        return (
            <div>
                <ul className = "scoring-system">
                    <li className="arrow moveLeft">

                        <a className="btn-floating btn-medium waves-effect waves-light red" onClick={this.handleClickUp}><i className="material-icons right">thumb_up</i></a>
                    </li>
                    <li className="likesScore text">{redditData}</li>
                    <li className="arrow">
                        <a className="btn-floating btn-medium  waves-effect waves-light red" onClick={this.handleClickDown}><i className="material-icons right">thumb_down</i></a>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Scoring
