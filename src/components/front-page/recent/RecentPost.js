import React from "react";
import './style.scss';
import ReactLoading from "react-loading";
import Helper from "../../../class/Helper";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import Button from "../../global/button/Button";

class RecentPost extends React.Component {
    constructor(props) {
        super(props);

        // Init default state.
        this.state = {
            apiWordPress: this.props.api,
            isLoaded: false,
            posts: []
        }
    }

    componentDidMount() {
        const comp = this;
        this.state.apiWordPress.getLatestPosts()
            .then(response => response.text())
            .then(result => {
                let resultObj = JSON.parse(result);

                //Update state.
                comp.setState({
                    isLoaded: true,
                    posts: resultObj
                });
            })
            .catch(error => {
                //Update state.
                comp.setState({
                    isLoaded: true,
                    error: error.toString()
                });
            });
    }

    render() {
        const {error, isLoaded, posts} = this.state;

        // Make sure ajax is done.
        if (isLoaded) {
            if (error) {
                return (
                    <div className="text-center">
                        <p>{error}</p>
                    </div>
                )
            } else {
                return (
                    <>
                        <div className='blog-items-wrapper'>
                            <div className='frow'>
                                {posts.map(post => (
                                    <PostItem key={post.id} slug={post.slug} title={post.title} date={post.date} excerpt={post.excerpt} thumbnail={post.thumbnail_url}/>
                                ))}
                            </div>
                        </div>
                        <div className='text-center'>
                            <Button to='/posts'>All Posts</Button>
                        </div>
                    </>
                )
            }
        } else {
            return (
                <div className='center-content'>
                    <ReactLoading color='#a53484'/>
                </div>
            );
        }
    }
}

function PostItem(props) {
    let thumbnailStyle = {};

    // Check maybe has thumbnail.
    if (props.thumbnail) {
        thumbnailStyle.backgroundImage = `url(${props.thumbnail})`;
    }

    return (
        <div className='col-sm-1-3'>
            <div className="blog-item">
                <div className="thumbnail" style={thumbnailStyle}></div>
                <Link to={props.slug}>
                    <h3>{props.title}</h3>
                </Link>
                <p className="excerpt">{Helper.stripTags(props.excerpt)}</p>
                <p className="blog-time">{props.date}</p></div>
        </div>
    )
}

PostItem.propTypes = {
    thumbnail: PropTypes.any,
    slug: PropTypes.string,
    title: PropTypes.string,
    excerpt: PropTypes.string,
    date: PropTypes.string
};

export {RecentPost, PostItem};