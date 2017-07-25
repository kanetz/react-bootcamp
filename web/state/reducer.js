import {handleActions} from 'redux-actions';

import * as actions from './actions';

const defaultState = {
    photos: [],
    loading: false,
    error: null,
};

const reducer = handleActions({
    [actions.load]: state => ({
        ...state,
        loading: true,
        error: null,
    }),
    [actions.loadFulfilled]: (state, action) => {
        if(action.error) {
            return {
                ...state,
                photos: [],
                loading: false,
                error: action.payload,
            };
        }

        return {
            ...state,
            photos: action.payload.map((photo, index) => ({
                ...photo,
                id: index + 1,
                likes: Math.floor(100 + Math.random() * 900),
            })),
            loading: false,
        };
    },
    [actions.likeFulfilled]: (state, action) => ({
        ...state,
        photos: state.photos.map((photo, index) => {
            if (index !== action.payload) return photo;
            return {
                ...photo,
                likes: (photo.likes || 0) + 1,
            };
        }),
    }),
    [actions.removeFulfilled]: (state, action) => ({
        ...state,
        photos: [
            ...state.photos.slice(0, action.payload),
            ...state.photos.slice(action.payload + 1),
        ],
    }),
}, defaultState);

export default reducer;
