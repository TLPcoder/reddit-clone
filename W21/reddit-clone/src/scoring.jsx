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
        console.log(this.state.likes);
        console.log("max", this.max)
        if(this.state.likes < this.max){
            this.setState({
                likes: this.state.likes + 1
            })
        }
    }
    handleClickDown(event) {
        console.log(this.state.likes);
        console.log("min", this.min)
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
                <ul>
                    <li className="arrow">
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
