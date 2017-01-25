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
                        <button onClick={this.handleClickUp}><img src="../images/up.png" alt="" height="30px" width="30px"/></button>
                    </li>
                    <li className="likes">{redditData}</li>
                    <li className="arrow">
                        <button onClick={this.handleClickDown}><img src="../images/down.png" alt="" height="30px" width="30px"/></button>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Scoring
