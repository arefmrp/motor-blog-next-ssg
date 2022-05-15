import React, {Component} from 'react';
class Title extends Component {
    render() {
        return (
            <div className="title-component">
                <span>{this.props.title}</span>
                <span>{this.props.desc}</span>

            </div>
        );
    }
}

export default Title;
