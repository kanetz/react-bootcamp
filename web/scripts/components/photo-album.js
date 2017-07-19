import React from 'react';
import {Container, Header} from 'semantic-ui-react';

import AddPhotoForm from './add-photo-form';
import PhotoList from './photo-list';

class PhotoAlbum extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: [
                {id: 1, description: 'my image 1', url: ''},
                {id: 2, description: 'my image 2', url: ''},
                {id: 3, description: 'my image 3', url: ''},
            ],
        };
        this.addPhoto = this.addPhoto.bind(this);
    }

    addPhoto(photo) {
        console.log('addPhoto: ', photo);
    }

    render() {
        const noop = () => undefined;
        return (
            <Container>
                <Header as="h1">Photo Gallery</Header>
                <PhotoList photos={this.state.photos}/>
                <AddPhotoForm onAddPhoto={this.addPhoto}/>
            </Container>
        );
    }
}

export default PhotoAlbum;