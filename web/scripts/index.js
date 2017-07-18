// @flow

import React from 'react';
import {render} from 'react-dom';

import PhotoAlbum from './components/photo-album';

const photos = [
    {id: 1, description: 'my image 1', url: ''},
    {id: 2, description: 'my image 2', url: ''},
    {id: 3, description: 'my image 3', url: ''},
];
render(
    <PhotoAlbum photos={photos} />,
    document.getElementById('app')
);

