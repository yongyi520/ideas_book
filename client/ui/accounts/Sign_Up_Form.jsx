import React, {Component} from 'react';

export default class Sign_Up_Form extends Component {
    
    handleSubmit(e){
        e.preventDefault();
        var first_name = this.refs.first_name.value.trim();
        var last_name = this.refs.last_name.value.trim();
        var email = this.refs.email.value.trim();
        var password = this.refs.password.value.trim();
        var user = {
            email: email,
            password: password,
            profile: {
                fullname: (first_name + last_name).toLowerCase(),
                firstname: first_name,
                lastname: last_name,
                name: first_name
            }
        };
        Accounts.createUser(user, (error) => {
            FlowRouter.go('/ideas');
            if(error){
                console.log(error.reason);
            }
        })
    }
    
    render(){
        return (
            <div className="content_wrapper">
                <div className="form_wrapper">
                    <div className="signup_form">
                    <div className="form-title">
                        <h1>Sign Up</h1>
                        <p className="text-muted">
                            It's only a few entries away...
                        </p>
                    </div>
                    
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="row">
                            <div className="col-sm-6 form-group">
                                <input type="text" ref="first_name" placeholder="First Name" className="form-control"></input>
                            </div>
                            <div className="col-sm-6 form-group">
                                <input type="text" ref="last_name" placeholder="Last Name" className="form-control"></input>
                            </div>
                        </div>

                        <div className="form-group">
                            <input type="text" ref="email" placeholder="Email" className="form-control"></input>
                        </div>

                        <div className="form-group">
                            <input type="password" ref="password" placeholder="Password" className="form-control"></input>
                        </div>
                        <button type="submit" className="btn btn-success">Sign Up</button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}