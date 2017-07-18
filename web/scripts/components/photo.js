import React from 'react';

function Photo({photo}) {
    return (
        <dl>
            <dt>{photo.description}</dt>
            <dd><img src={photo.url} title="photo.description" alt={photo.description} /></dd>
        </dl>
    );
}

export default Photo;
