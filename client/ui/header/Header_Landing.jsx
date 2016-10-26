import React, {Component} from 'react';

import LoginUI from '../accounts/Sign_In_Form.jsx';

export default class Header_Landing extends Component {
    render(){
        return (
            <header className="header clearfix">
                <div id="wrapper">
                    <div className="logo_home">
                        <img src="https://s3.amazonaws.com/webimagexu/ideabook/noun_108235_green.png"/>
                            <div id="logo_words">
                                <p id="top">Idea</p>
                                <p id="bot">Book</p>
                            </div>

                    </div>

                    <LoginUI/>

                </div>
                <hr/>
            </header>
        )
    }
}