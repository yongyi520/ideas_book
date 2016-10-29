import React, {Component} from 'react';
import ReactDom from 'react-dom';

export default class Sign_In_Form extends Component {
    
    handleSubmit(e){
        e.preventDefault();
        var email = this.refs.email.value.trim();
        var password = this.refs.password.value.trim();
        Meteor.loginWithPassword (email, password, (error)=>{
            FlowRouter.go('/ideas');
            if(error){
                console.log(error.reason);
            }
        })
    }

    loginWithFacebook(e) {
        Meteor.loginWithFacebook({}, (error) => {
            if (error) {
                throw new Meteor.Error("Facebook Login Failed");
            }
            FlowRouter.go('/ideas');
        });

    }

    loginWithGoogle(e) {
        Meteor.loginWithGoogle({}, (error) => {
            if (error) {
                throw new Meteor.Error("Google Login Failed");
            }
            FlowRouter.go('/ideas');
        })
    }


    

    render(){

        return (
            <div className="collapse navbar-collapse row" id="navbar">
                <form onSubmit={this.handleSubmit.bind(this)} role="form" id="signin" className="navbar-form navbar-right">
                    <div className="input-group">
                        <span className="input-group-addon icon-background">
                            <i className="fa fa-user"></i>
                        </span>
                        <input id="email" type="email" ref="email" className="form-control" placeholder="Email Address"></input>
                    </div>
                    <div className="input-group">
                         <span className="input-group-addon icon-background">
                             <i className="fa fa-lock"></i>
                         </span>
                        <input id="password" type="password" ref="password" className="form-control" placeholder="Password"></input>
                    </div>
                    <button type="submit" className="btn btn-custom">Log In </button>
                </form>

                <div className="collapse navbar-collapse row" id="navbar">
                    <div className="button_group navbar-right">
                        <button onClick={this.loginWithFacebook.bind(this)} className="navbar-form btn-social">
                            <i className="fa fa-facebook"></i>    Log In
                        </button>
                        <button onClick={this.loginWithGoogle.bind(this)} className="navbar-form btn-social">
                            <i className="fa fa-google-plus"></i>    Log In
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}