import {AppContainer} from 'react-hot-loader'

import React from 'react';
import {render} from 'react-dom';

import PhotoAlbum from '@components/photo-album';

import 'reset-css/reset.css';
import 'semantic-ui-css/semantic.min.css';

render(
    (
        <AppContainer>
            <PhotoAlbum/>
        </AppContainer>
    ),
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('@components/photo-album', () => {
        const Updated = require('@components/photo-album').default;
        render(
            (
                <AppContainer>
                    <Updated/>
                </AppContainer>
            ),
            document.getElementById('app')
        );
    });
}