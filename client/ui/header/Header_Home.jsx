import React, {Component} from 'react';

import { composeWithTracker } from 'react-komposer';

import gsap from 'gsap';

class Header_Home extends Component {

    componentDidMount(){
        var timeline = new TimelineLite();
        timeline.from("#wrapper", 1, {
            x: -20,
            autoAlpha: 0
        });
    }

    logout(e) {
        e.preventDefault();
        Meteor.logout();
        FlowRouter.go('/');
    }

    displayName(){
        if(Meteor.user()){

            return (Meteor.user().profile.name)?<p>Welcome, {Meteor.user().profile.name}</p>:<p>Welcome, {Meteor.user().profile.firstname}</p>;
        } else {
            return <p> Loading ... </p>;
        }
    }

    routeToNewIdea(e){
        e.preventDefault();
        FlowRouter.go('/ideas/new');
    }

    routeToIndex(e) {
        e.preventDefault();
        FlowRouter.go('/ideas');
    }

    render() {
        return (
            <header className="header clearfix">
                <div id="wrapper">
                    <div className="welcome_message">
                        {this.displayName()}
                    </div>
                    <div className="logo_index">
                        <a onClick={this.routeToIndex.bind(this)} href="#">
                            <img src="https://s3.amazonaws.com/webimagexu/ideabook/noun_108235_green.png"/>
                        </a>
                    </div>
                    <nav className="nav">
                        <a onClick={this.logout.bind(this)} href="#" className="last_item">Log Out</a>
                        <a onClick={this.routeToNewIdea.bind(this)} href="#">New Idea</a>
                    </nav>
                </div>
                <hr/>
            </header>
        )
    }
}

export default composeWithTracker((props, onData) => {
    var userSubscription = Meteor.subscribe("users", Meteor.userId());
    
    if (userSubscription.ready()){
        onData(null, {
            users: Meteor.users.find().fetch()
        });
    }
})(Header_Home);