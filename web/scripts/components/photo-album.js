import React from 'react';
import {Container, Header} from 'semantic-ui-react';

import AddPhotoForm from './add-photo-form';
import PhotoList from './photo-list';

import styles from './photo-album.css';

class PhotoAlbum extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: [
                {id: 1, description: 'React', url: 'https://facebook.github.io/react/img/logo.svg'},
                {id: 2, description: 'Vue.js', url: 'https://vuejs.org/images/logo.png'},
                {id: 3, description: 'AngularJS', url: 'https://angularjs.org/img/AngularJS-large.png'},
                {id: 4, description: 'Ember.js', url: 'https://www.emberjs.com/images/learn/ember-4a021047.png'},
                {id: 5, description: 'Meteor', url: 'http://docs.meteor.com/images/logo-coralspace-left.svg'},
            ],
            nextId: 6,
        };
        this.likePhoto = this.likePhoto.bind(this);
    }

    likePhoto(likedPhoto) {
        this.setState(prevState => ({
            ...prevState,
            photos: prevState.photos.map(photo => {
                if (photo.id !== likedPhoto.id) return photo;
                return {
                    ...photo,
                    likes: (photo.likes || 0) + 1,
                };
            }),
        }));
    }

    render() {
        return (
            <Container className={styles.photoAlbum}>
                <Header className={styles.photoAlbumHeader} as="h1">Photo Gallery</Header>
                <PhotoList className={styles.photoList} photos={this.state.photos}
                           whenLiked={this.likePhoto}/>
            </Container>
        );
    }
}

export default PhotoAlbum;
