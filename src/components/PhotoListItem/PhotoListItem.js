import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card, CardBody} from "reactstrap";
import PhotoThumbnail from "../PhotoThumbnail/PhotoThumbnail";
import './PhotoListItem.css'
import {Link} from "react-router-dom";

const PhotoListItem = props => {
    return (
        <Card className='photo'>
            <CardBody>
                <PhotoThumbnail image={props.image}/>
                <div style={{ textAlign: 'center' }}>
                    <div className='link' onClick={() => props.showModal(props.image)}>
                        {props.title}
                    </div>
                    <p>By: <Link to={'/users/' + props.user._id}>{props.user.username}</Link></p>
                    {props.userCanDelete && <Button onClick={()=>props.deletePhoto(props._id)}>Delete</Button>}
                </div>
            </CardBody>
        </Card>
    );
};

PhotoListItem.propTypes = {
    image: PropTypes.string,
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
};

export default PhotoListItem;
