import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import PhotoForm from "../../components/PhotoForm/PhotoForm";
import {createPhoto} from "../../store/actions/photosActions";

class NewPhoto extends Component {

    createPhoto = photoData => {
        this.props.onPhotoCreated(photoData).then(() => {
            this.props.history.push('/');
        });
    };

    render() {
        return (
            <Fragment>
                <h2>New photo</h2>
                <PhotoForm
                    onSubmit={this.createPhoto}
                />
            </Fragment>
        );
    }
}



const mapDispatchToProps = dispatch => ({
    onPhotoCreated: photoData => dispatch(createPhoto(photoData)),
});

export default connect(null, mapDispatchToProps)(NewPhoto);
