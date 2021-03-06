import React, {Component} from 'react';
import { composeWithTracker } from 'react-komposer';

import Idea_Box from '../ideas/Idea_Box.jsx';

import gsap from 'gsap';

class Idea_Show extends Component {
    
    componentDidMount(){
        var timeline = new TimelineLite();
        timeline.from(".content_index", 1, {
            autoAlpha: 0,
            delay: 1
        }).to(".content_index", .01, {
            autoAlpha: 1
        });
    }

    componentWillUpdate(){
        var timeline = new TimelineLite();
        timeline.from(".content_index", 1, {
            autoAlpha: 0,
            delay: 1
        }).to(".content_index", .01, {
            autoAlpha: 1
        });
    }
    
    getIdeaContent(){
        let ideaContent = [];
        let ideas;
        if (this.props.category){
            ideas = this.props.ideas.find(this.props.category).fetch();
        } else {
            ideas = this.props.ideas.find().fetch();
        }

        let length = ideas.length;
        console.log(length);

        for (var i = 0; i < length; i += 2) {
            if ((length-i) > 1 ) {
                ideaContent.push(
                    <div key={i/2} className="row clearfix">
                        <Idea_Box key={ideas[i]._id} ideaKey={ideas[i]._id} name={ideas[i].name}/>
                        <Idea_Box key={ideas[i+1]._id} ideaKey={ideas[i+1]._id} name={ideas[i+1].name}/>
                    </div>
                );
            } else {
                ideaContent.push(
                    <div key={i/2} className="row clearfix">
                        <Idea_Box key={ideas[i]._id} ideaKey={ideas[i]._id} name={ideas[i].name}/>
                    </div>
                );
            }
        }

        return ideaContent;
    }

    render(){

        return (
            <div className="content_index">
                <div className="content_index_wrapper">
                    {this.getIdeaContent()}
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