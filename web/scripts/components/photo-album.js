import React from 'react';

import AddPhotoForm from './add-photo-form';
import Photo from './photo';

function PhotoAlbum({photos = []}) {
    return (
        <div className="photo-album">
            <h1>Photo Gallery</h1>
            <AddPhotoForm onAddPhoto={data => {console.log(data)}} />
            <ul className="photo-list">
                {
                    photos.map(photo => (
                        <li className="photo-item" key={photo.id}>
                            <Photo photo={photo} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default PhotoAlbum;
