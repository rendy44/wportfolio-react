import React from "react";
import './style.scss';
import PropTypes from 'prop-types';

class Section extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width: this.props.width ? this.props.width : 'col-sm-2-3',
            className: this.props.className ? 'section ' + this.props.className : 'section',
        }
    }

    render() {
        return (
            <section className={this.state.className} id={this.props.id}>
                <div className='frow-container'>
                    <div className='frow'>
                        <div className={this.state.width}>
                            {this.maybeGetSectionTitle()}
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    maybeGetSectionTitle() {
        if (this.props.title) {
            return (
                <h2 className='section-title'>{this.props.title}</h2>
            )
        } else {
            return (<></>)
        }
    }
}

Section.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    width: PropTypes.string,
    id: PropTypes.string.isRequired
};

export default Section;