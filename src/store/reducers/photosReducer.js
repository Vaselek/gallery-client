import {FETCH_PHOTOS_SUCCESS} from "../actions/photosActions";

const initialState = {
    photos: [],
};

const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PHOTOS_SUCCESS:
            return {...state, photos: action.photos};
        default:
            return state;
    }
};

export default photosReducer;
