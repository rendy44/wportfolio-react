import React from "react";
import './style.scss';
import Masthead from "../../global/masthead/Masthead";
import TopNav from "../../global/navbar/Navbar";

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
                <TopNav/>
                <Masthead title='Oke juragan'/>
                <p>Hey hey hey {this.state.slug}</p>
            </>
        );
    }
}

export default SinglePost;