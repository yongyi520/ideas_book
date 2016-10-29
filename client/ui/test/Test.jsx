import React, {Component} from 'react';
import cloudinary from 'cloudinary';



export default class Test extends Component {

    constructor(){
        super();
        this.state = {
            imagePath: ''
        }
    }

    handleSubmit(e){

    }

    uploadImageInputChange(){
        console.log(this.refs.image_upload.value);
        this.state.imagePath = this.refs.image_upload.value;
        let files = this.refs.image_upload.files;
        console.log(files);
        // return Cloudinary.upload(files, {
        //     api_key: '349722997657141'
        // }, (err, res) => {
        //     console.log("upload error" + err);
        //     console.log(res);
        // });
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
                            <div className="form-group">
                                <input onChange={this.uploadImageInputChange.bind(this)} type="file" ref="image_upload" className="form-control"/>
                            </div>
                            <button type="submit" className="btn btn-success">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}