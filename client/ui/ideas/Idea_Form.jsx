import React, {Component} from 'react';

export default class Idea_Form extends Component {

    handleSubmit(e){
        e.preventDefault();

        var name = this.refs.name.value;
        var category = this.refs.category.value;
        var purpose = this.refs.purpose.value;
        var features = this.refs.features.value;
        var note = this.refs.note.value;
        var implementation = this.refs.implementation.value;

        var idea = {
            userid: Meteor.userId(),
            category: category.toLowerCase(),
            name: name,
            purpose: purpose,
            features: features,
            note: note,
            implementation: implementation,
            createdAt: new Date()
        };

        Meteor.call('register-new-idea', idea, (error)=>{
            if (error) {
                console.log(error.reason);
            } else {
                FlowRouter.go('/ideas');
            }
        });

    }

    render() {
        return (
            <div className="content_wrapper">
                <div className="form_wrapper">
                    <div className="new_idea_form">
                        <div className="form-title">
                            <h1>New Idea</h1>
                            <p className="text-muted">
                                Where new creations are born!
                            </p>
                        </div>

                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <label> Idea Name </label>
                                <input type="text" ref="name" placeholder="Idea Name" id="ideaname" className="form-control"></input>
                            </div>

                            <div className="form-group">
                                <label> Category </label>
                                <select ref="category" className="form-control">
                                    <option>Website</option>
                                    <option>Mobile App</option>
                                    <option>Physical Product</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label> Purpose </label>
                                <textarea ref="purpose" placeholder="Write Your Purpose for This Idea..." className="form-control"></textarea>
                            </div>

                            <div className="form-group">
                                <label> Features </label>
                                <textarea ref="features" placeholder="What cool features do you want in this idea?" className="form-control"></textarea>
                            </div>

                            <div className="form-group">
                                <label> Creator's Note </label>
                                <textarea ref="note" placeholder="Anything else?" className="form-control"></textarea>
                            </div>

                            <div className="form-group">
                                <label> Implementation Versions </label>
                                <textarea ref="implementation" placeholder="Let's make this concrete with roadmaps" className="form-control"></textarea>
                            </div>
                            <button type="submit" className="btn btn-success">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}