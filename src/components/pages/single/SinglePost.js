import React from "react";
import './style.scss';
import Masthead from "../../global/masthead/Masthead";
import TopNav from "../../global/navbar/Navbar";
import Section from "../../global/section/Section";
import ApiWordPress from "../../../class/ApiWordPress";
import ReactLoading from "react-loading";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class SinglePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
        }
    }

    componentDidMount() {
        const {post_slug} = this.props.match.params,
            apiWordPress = new ApiWordPress(process.env.REACT_APP_SITE_URL),
            comp = this;

        apiWordPress.getPostDetail(post_slug)
            .then(response => {

                if (200 !== response.status) {
                    comp.setState({
                        isLoaded: true,
                        error: response.statusText
                    })
                }
                return response.json()
            })
            .then((result) => {

                //Update state.
                comp.setState({
                    isLoaded: true,
                    post_detail: result
                });
            })
            .catch((error, a) => {
                //Update state.
                comp.setState({
                    isLoaded: true,
                    error: error.toString()
                });
            });
    }

    render() {
        const {isLoaded, post_detail, error} = this.state;

        if (isLoaded) {
            if (error) {
                return (
                    <div className="center-content full">
                        <p>{error.toString()}</p>
                    </div>
                )
            } else {
                return (
                    <>
                        <TopNav/>
                        <Masthead title={post_detail.title}/>
                        <Section id='single-post' width='col-sm-4-5 col-md-2-3' className='section-single section-single-post'>
                            <SinglePostMeta authorAvatar={post_detail.author_avatar_url} authorName={post_detail.author_name} postDate={post_detail.date} postTime={post_detail.time}/>
                            <SinglePostThumbnail url={post_detail.thumbnail} caption={post_detail.thumbnail_caption}/>
                            <div dangerouslySetInnerHTML={{__html: post_detail.content}} />
                            {/*{post_detail.content}*/}
                        </Section>
                    </>
                );
            }
        } else {
            return (
                <div className="center-content full">
                    <ReactLoading color='#a53484'/>
                </div>
            )
        }
    }
}

function SinglePostMeta(props) {
    return (
        <div className="single-meta">
            <div className="author-avatar">
                <img alt="avatar" src={props.authorAvatar} className="avatar avatar-50 photo" height="50" width="50"/>
            </div>
            <div className="author-detail">
                <Link to={props.authorName} title="Author name" rel="author">{props.authorName}</Link>
                <span className="meta-date">{props.postDate} @ {props.postTime}</span>
            </div>
        </div>
    )
}

function SinglePostThumbnail(props) {
    if (props.url) {
        return (
            <>
                <img className="wp-post-image" width="1024" height="682" src={props.url} alt="Post thumbnail"/>
                <p className="thumbnail-caption">{props.caption}</p>
            </>
        )
    } else {
        return (<></>)
    }
}

SinglePostMeta.propTypes = {
    authorAvatar: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    postDate: PropTypes.string.isRequired,
    postTime: PropTypes.string.isRequired,
};

SinglePostThumbnail.propTypes = {
    url: PropTypes.any.isRequired,
    caption: PropTypes.string
};

export default SinglePost;