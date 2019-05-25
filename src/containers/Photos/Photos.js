import React, {Component} from 'react';
import {Button, Col, Row} from "reactstrap";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PhotoListItem from "../../components/PhotoListItem/PhotoListItem";

import {deletePhoto, fetchPhotos} from "../../store/actions/photosActions";
import './Photos.css';
import Photo from "../../components/Photo/Photo";

class Photos extends Component {
    state = {
        isModalOpen: false,
        image: null
    }
    componentDidMount() {
        this.props.fetchPhotos(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchPhotos(this.props.match.params.id);
        }
    }

    toggleModal = (image) => {
        this.setState({isModalOpen: !this.state.isModalOpen, image: image})
    }

    deletePhoto = (photoId) => {
        this.props.deletePhoto(photoId, this.props.user._id)
    }

    render() {
        const userCanEdit = this.props.user && this.props.user._id === this.props.match.params.id;
        return (
            <Row>
                <Col sm={12}>
                    <h2>
                        Photos
                        {userCanEdit &&
                        <Link to="/photos/new">
                            <Button
                                color="primary"
                                className="float-right"
                            >
                                Add photo
                            </Button>
                        </Link>
                        }
                    </h2>

                    <div className="photo-container">
                        {this.props.photos.map(photo => (
                            <PhotoListItem
                                key={photo._id}
                                _id={photo._id}
                                title={photo.title}
                                user={photo.user}
                                image={photo.image}
                                showModal={this.toggleModal}
                                userCanDelete={userCanEdit}
                                deletePhoto={this.deletePhoto}
                            />
                        ))}
                    </div>
                    <Photo
                        isOpen={this.state.isModalOpen}
                        toggle={this.toggleModal}
                        image={this.state.image}
                    />
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => ({
    photos: state.photos.photos,
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    fetchPhotos: (userId) => dispatch(fetchPhotos(userId)),
    deletePhoto: (photoId, userId) => dispatch(deletePhoto(photoId, userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
