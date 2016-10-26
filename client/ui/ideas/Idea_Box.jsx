import React, {Component} from 'react';

export default class Idea_Box extends Component {
    render(){
        return (
            <a href={`/ideas/${this.props.ideaKey}`}>
                <div className="content_index_box">
                    <h3>{this.props.name}</h3>
                    <p>3 weeks ago</p>
                </div>
            </a>
        )
    }
}