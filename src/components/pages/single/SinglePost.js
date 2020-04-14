import React from "react";
import './style.scss';

class SinglePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slug: null
        }
    }

    componentDidMount() {
        console.log(this.props.match.params)
        const {post_slug} = this.props.match.params;

        this.setState({
            slug: post_slug
        })
    }

    render() {
        return (
            <>
                <p>Hey hey hey {this.state.slug}</p>
            </>
        );
    }
}

export default SinglePost;