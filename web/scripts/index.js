// @flow

import React from 'react';
import {render} from 'react-dom';

import PhotoAlbum from './components/photo-album';

import 'reset-css/reset.css';
import 'semantic-ui-css/semantic.min.css';

render(
    <PhotoAlbum/>,
    document.getElementById('app')
);

