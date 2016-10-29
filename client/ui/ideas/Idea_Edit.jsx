import React, {Component} from 'react';
import { composeWithTracker } from 'react-komposer';

class Idea_Edit extends Component {

    idea(){
        return this.props.ideas.findOne(this.props.id);
    }

    handleSubmit(e){
        e.preventDefault();

        var name = this.refs.name.value;
        var category = this.refs.category.value;
        var purpose = this.refs.purpose.value;
        var features = this.refs.features.value;
        var note = this.refs.note.value;
        var implementation = this.refs.implementation.value;
        
        var idea = {
            _id: this.props.id,
            userid: Meteor.userId(),
            category: category,
            name: name,
            purpose: purpose,
            features: features,
            note: note,
            implementation: implementation
        };

        Meteor.call('update-idea', idea, (error)=>{
            if (error) {
                console.log(error.reason);
            } else {
                FlowRouter.go('/ideas');
            }
        });

    }

    displayImages(images){

        if(images){

            var displayImages = images.map((image) => {
                return (
                    <a href={image.url} key={image.public_id} target="_blank">
                        <img src={image.url} width="150"/>
                    </a>
                )
            });
            console.log(displayImages);
            return (
                <div className="row">
                    {displayImages}
                </div>
            )
        }
    }

    render() {
        let idea = this.idea();
        return (
            <div className="content_wrapper">
                <div className="form_wrapper">
                    <div className="new_idea_form">
                        <div className="form-title">
                            <h1>Edit Idea</h1>

                        </div>

                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <label> Idea Name </label>
                                <input type="text" ref="name" id="ideaname" className="form-control" defaultValue={idea.name}></input>
                            </div>

                            <div className="form-group">
                                <label> Category </label>
                                <select ref="category" defaultValue={idea.category} className="form-control">
                                    <option value="website">Website</option>
                                    <option value="mobile app">Mobile App</option>
                                    <option value="physical product">Physical Product</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label> Purpose </label>
                                <textarea ref="purpose" className="form-control" defaultValue={idea.purpose}></textarea>
                            </div>

                            <div className="form-group">
                                <label> Features </label>
                                <textarea ref="features" className="form-control" defaultValue={idea.features}></textarea>
                            </div>

                            <div className="form-group">
                                <label> Creator's Note </label>
                                <textarea ref="note" className="form-control" defaultValue={idea.note}></textarea>
                            </div>

                            <div className="form-group">
                                <label>Designs</label>
                                {this.displayImages(idea.image)}
                                <input type="file" ref="image_upload" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label> Implementation Versions </label>
                                <textarea ref="implementation" className="form-control" defaultValue={idea.implementation}></textarea>
                            </div>
                            <button type="submit" className="btn btn-success">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default composeWithTracker((props, onData) => {
    var ideaSubscription = Meteor.subscribe("ideas", Meteor.userId());

    if (ideaSubscription.ready()){
        onData(null, {
            ideas: Ideas
        });
    }
})(Idea_Edit);