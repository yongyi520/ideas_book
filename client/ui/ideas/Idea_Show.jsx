import React, {Component} from 'react';
import { composeWithTracker } from 'react-komposer';


class Idea_Show extends Component {

    idea(){
        return this.props.ideas.findOne(this.props.id);
    }

    deleteIdea(){
        Meteor.call('delete-idea', this.props.id);
        FlowRouter.go('/ideas');
    }

    render(){

        let idea = this.idea();
        return (
            <div className="content_individual_wrapper clearfix">
                <div className="content_individual_header">
                    <h1>{idea.name}</h1>
                </div>

                <div className="content_individual_box">
                    <h2>Purpose</h2>
                    <p>{idea.purpose}</p>
                </div>

                <div className="content_individual_box">
                    <h2>Features</h2>
                    <p>{idea.features}</p>
                </div>

                <div className="content_individual_box">
                    <h2>Creator's Note</h2>
                    <p>{idea.note}</p>
                </div>

                <div className="content_individual_box">
                    <h2>Implementation</h2>
                    <p>{idea.implementation}</p>
                </div>

                <div className="button_group">
                    <a href={`/ideas/${this.props.id}/edit`}>
                        <button className="btn btn-success">Edit</button>
                    </a>
                    <a href="#">
                        <button onClick={this.deleteIdea.bind(this)} className="btn btn-success">Delete</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default composeWithTracker((props, onData) => {
    var ideaSubscription = Meteor.subscribe("ideas", Meteor.userId());

    if (ideaSubscription.ready()){
        onData(null, {
            ideas: Ideas
        });
    }
})(Idea_Show);

