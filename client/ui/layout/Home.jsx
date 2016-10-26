import React from 'react';

import Header_Home from '../header/Header_Home.jsx';
import Sidebar from '../sidebar/Sidebar.jsx';

export const Home = ( {content} ) => (
    <div>
        <Header_Home/>
        <div className="content_wrapper clearfix">
            {content.sidebar}
            {content.content}
        </div>
    </div>
);