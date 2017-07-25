import {AppContainer} from 'react-hot-loader'

import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createEpicMiddleware} from 'redux-observable'
import {Provider} from 'react-redux';

import reducer from './state/reducer';
import rootEpic from './state/epic';

import PhotoAlbum from '@containers/photo-album';

import 'reset-css/reset.css';
import 'semantic-ui-css/semantic.min.css';

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            createEpicMiddleware(rootEpic),
        )
    ),
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
