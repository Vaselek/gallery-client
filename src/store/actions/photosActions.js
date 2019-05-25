import axios from '../../axios-api';

export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const CREATE_PHOTO_SUCCESS = 'CREATE_PHOTO_SUCCESS';
export const DELETE_PHOTO_SUCCESS = 'DELETE_PHOTO_SUCCESS';

export const fetchPhotosSuccess = photos => ({type: FETCH_PHOTOS_SUCCESS, photos});
export const createPhotoSuccess = () => ({type: CREATE_PHOTO_SUCCESS});
export const deletePhotoSuccess = () => ({type: DELETE_PHOTO_SUCCESS});


export const fetchPhotos = userId => {
    return dispatch => {
        let path = '/photos';

        if (userId) {
            path += '?author=' + userId;
        }

        return axios.get(path).then(
            response => dispatch(fetchPhotosSuccess(response.data))
        );
    };
};

export const createPhoto = photoData => {
    return (dispatch) => {
        return axios.post('/photos', photoData).then(
            () => dispatch(createPhotoSuccess())
        );
    };
};

export const deletePhoto = (photoId, userId) => {
    return (dispatch) => {
        return axios.delete('/photos/' + photoId).then(
            () => {
                dispatch(deletePhotoSuccess())
                dispatch(fetchPhotos(userId))
            }
        );
    };
};
