import React, {Component} from 'react';

class Scoring extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.data
        }
        this.handleClickUp = this.handleClickUp.bind(this);
        this.handleClickDown = this.handleClickDown.bind(this);
    }
    handleClickUp(event) {
        this.setState({
            likes: this.props.data.ups++
        })
    }
    handleClickDown(event) {
        this.setState({
            likes: this.props.data.ups--
        })
    }
    render() {
        var redditData = this.props.data
        return (
            <div>
                <ul>
                    <li className="arrow">
                        <button onClick={this.handleClickUp}><img src="../images/up.png" alt="" height="30px" width="30px"/></button>
                    </li>
                    <li className="likes">{redditData.ups}</li>
                    <li className="arrow">
                        <button onClick={this.handleClickDown}><img src="../images/down.png" alt="" height="30px" width="30px"/></button>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Scoring
