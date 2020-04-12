import React from "react";
import './style.scss'

class Section extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id ? this.props.id : '',
            width: this.props.width ? this.props.width : 'col-sm-2-3',
        }
    }

    render() {
        return (
            <section className='section' id={this.state.id}>
                <div className='frow-container'>
                    <div className='frow'>
                        <div className={this.state.width}>
                            <h2 className='section-title'>{this.props.title}</h2>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Section;