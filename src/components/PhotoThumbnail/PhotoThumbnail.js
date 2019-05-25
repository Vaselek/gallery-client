import React from 'react';

import imageNotAvailable from '../../assets/images/image_not_available.png';
import {apiURL} from "../../constants";

const styles = {
    width: '200px',
    height: '200px',
    display: 'flex',
    margin: 'auto'
};

const PhotoThumbnail = props => {
    let image = imageNotAvailable;

    if (props.image) {
        image = apiURL + '/uploads/' + props.image;
    }

    return <img src={image} style={styles} className="img-thumbnail" alt="Small" />;
};

export default PhotoThumbnail;
