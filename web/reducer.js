import {handleActions} from 'redux-actions';

import {loadFulfilled, like, remove} from './actions';

const reducer = handleActions({
    [loadFulfilled]: (state, action) => ({
        ...state,
        photos: action.payload.map((photo, index) => ({
            ...photo,
            id: index + 1,
            likes: Math.floor(100 + Math.random() * 900),
        })),
    }),
    [like]: (state, action) => ({
        ...state,
        photos: state.photos.map((photo, index) => {
            if (index !== action.payload) return photo;
            return {
                ...photo,
                likes: (photo.likes || 0) + 1,
            };
        }),
    }),
    [remove]: (state, action) => ({
        ...state,
        photos: [
            ...state.photos.slice(0, action.payload),
            ...state.photos.slice(action.payload + 1),
        ],
    }),
}, {photos: []});

export default reducer;
