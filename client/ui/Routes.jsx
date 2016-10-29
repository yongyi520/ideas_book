import React from 'react';
import {mount} from 'react-mounter';

import {Home} from './layout/Home.jsx';
import {LandingPage} from './layout/Landing_Page.jsx';

import Sidebar from './sidebar/Sidebar.jsx';

import Body_Landing from './body/Body_Landing.jsx';
import Sign_Up_Form from './accounts/Sign_Up_Form.jsx';

import Idea_New from './ideas/Idea_Form.jsx';
import Idea_Index from './ideas/Idea_Index.jsx';
import Idea_Show from './ideas/Idea_Show.jsx';
import Idea_Edit from './ideas/Idea_Edit.jsx';

import Test from './test/Test.jsx';

// FlowRouter.route('/test', {
//    action() {
//        mount(Home, {
//            content: {
//                sidebar: (<div></div>),
//                content: (<Test/>)
//            }
//        })
//    } 
// });

FlowRouter.route('/', {
    action() {
        mount(LandingPage, {
            content: (<Body_Landing/>)
        })
    }
});

FlowRouter.route('/ideas', {
    action(params, queryParams) {
        
        mount(Home, {
            content: {
                sidebar: (<Sidebar/>),
                content:(<Idea_Index category={queryParams}/>)
            }
        })
    }
});

FlowRouter.route('/ideas/new', {
    action() {
        mount(Home, {
            content: {
                sidebar: (<div></div>),
                content: (<Idea_New/>)
            }
        })
    }
});

FlowRouter.route('/ideas/:id', {
    action(params) {
        mount(Home, {
            content: {
                sidebar: (<div></div>),
                content: (<Idea_Show id={params.id}/>)
            }
        })
    }
});

FlowRouter.route('/ideas/:id/edit', {
    action(params) {
        mount(Home, {
            content: {
                sidebar: (<div></div>),
                content: (<Idea_Edit id={params.id}/>)
            }
        })
    }
});

FlowRouter.route('/sign_up', {
    action() {
        mount(LandingPage, {
            content: (<Sign_Up_Form/>)
        });
    }
});



