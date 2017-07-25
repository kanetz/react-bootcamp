import {AppContainer} from 'react-hot-loader'

import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './reducer';
import PhotoAlbum from '@containers/photo-album';

import 'reset-css/reset.css';
import 'semantic-ui-css/semantic.min.css';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
const getRootElement = () => document.getElementById('app');

render(
    (
        <AppContainer>
            <Provider store={store}>
                <PhotoAlbum/>
            </Provider>
        </AppContainer>
    ),
    getRootElement()
);

if (module.hot) {
    module.hot.accept('@containers/photo-album', () => {
        const Updated = require('@containers/photo-album').default;
        render(
            (
                <AppContainer>
                    <Provider store={store}>
                        <Updated/>
                    </Provider>
                </AppContainer>
            ),
            getRootElement()
        );
    });
}
