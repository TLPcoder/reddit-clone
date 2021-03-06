import React, {Component} from 'react';
import CreatePost from './create-post'
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{data: {author: "Loading..."}}],
        };
        this.apiFetch = this.apiFetch.bind(this);
        this.apiFetch(this.props.url)
    }
    apiFetch(url) {
        fetch(url)
            .then(result => {
                return result.json();
            }).then(result => {
                console.log("ran");
                this.setState({
                    items: result.data.children
                });
            });
    }
    render() {
        console.log(this.props.url)
        var post = this.state.items
        var key = 0;
        var allPost = post.map(function(element){
            key++;
            return <CreatePost key = {key} data={element.data}/>
        })
        if(this.state.items[0].data.author === "Loading..."){
            return (<h1>{this.state.items[0].data.author}</h1>)
        }
        return (
            <div id = "all-post">{allPost}</div>
        )
    }
}
export default Post;
