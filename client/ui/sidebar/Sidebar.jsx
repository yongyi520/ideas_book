import React, {Component} from 'react';

export default class Sidebar extends Component {
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