import React, {Component} from 'react';

import gsap from 'gsap';

export default class Sidebar extends Component {

    componentDidMount(){
        var timeline = new TimelineLite();
        timeline.from(".side_bar", .5, {
           autoAlpha: 0,
            y: -20,
            delay: 1
        }).to(".side_bar", .01, {
            autoAlpha: 1,
            y: 0
        });
    }

    render(){
        return (
            <div className="side_bar">
                <h2>Categories</h2>
                <hr/>
                    <ul className="side_menu">
                        <li><a href="/ideas?category=website">Website</a></li>
                        <li><a href="/ideas?category=mobile app">Mobile App</a></li>
                        <li><a href="/ideas?category=physical product">Physical Product</a></li>
                    </ul>
            </div>
        )
    }
}