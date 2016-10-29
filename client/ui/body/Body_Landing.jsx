import React, {Component} from 'react';

import Footer from '../footer/Footer.jsx';
import gsap from 'gsap';


export default class Body_Landing extends Component {

    componentDidMount(){
        var timeline = new TimelineLite();
        timeline.from(".content_wrapper", 1, {
            autoAlpha: 0,
            y: 50,
            delay: .75
        }).to(".content_wrapper", .01, {
            autoAlpha: 1,
            y: 0
        });
    }

    render(){
        return (
            <div className="content_wrapper">
                <div className="banner_1">
                    <div className="banner_content_grey">
                    </div>
                    <div className="banner_content">
                        <h1>Your Own Idea Book</h1>
                        <p>Where you save your creative ideas for later</p>
                        <div className="button_group">
                            <a href="/sign_up" className="sign_up_button hero_banner_button">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
                <div className="white_space">
                    <p>Because You Are Creative</p>
                    <p>Because You Have Lots of Ideas</p>
                    <p>Because You Deserve <span>THE BEST</span></p>
                </div>
                <div className="feature_banner">
                    <div className="feature_banner_grey"></div>
                    <div className="feature_content">
                        <h1>Feature</h1>
                        <div className="feature_content_list">
                            <div className="feature_content_list_item">
                                <img src="https://s3.amazonaws.com/webimagexu/ideabook/noun_610023_cc.png"/>
                                <h3>Idea Storage</h3>
                                <p>Where you can store ideas later</p>
                            </div>
                            <div className="feature_content_list_item">
                                <img src="https://s3.amazonaws.com/webimagexu/ideabook/noun_191043_cc.png"/>
                                <h3>Web Design</h3>
                                <p>Where you can store designs of your website</p>
                            </div>
                            <div className="feature_content_list_item">
                                <img src="https://s3.amazonaws.com/webimagexu/ideabook/noun_665379_cc.png"/>
                                <h3>Implementation</h3>
                                <p>Where you can create road maps to transform your ideas into life!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="white_space">
                    <p>So what are you waiting for?</p>
                    <div className="button_group">
                        <a href="/sign_up" className="sign_up_button whitespace_button">
                            Sign Up
                        </a>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}