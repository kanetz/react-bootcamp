import React from 'react';
import {Container, Header} from 'semantic-ui-react';
import PhotoList from '@components/photo-list';

import styles from '@components/photo-album.css';

class PhotoAlbum extends React.Component {
    constructor(props) {
        super(props);

        this.state = givenInitialState();
        this.likePhoto = this.likePhoto.bind(this);
        this.removePhotoByIndex = this.removePhotoByIndex.bind(this);
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

    removePhotoByIndex(index) {
        this.setState(prevState => ({
            ...prevState,
            photos: [
                ...prevState.photos.slice(0, index),
                ...prevState.photos.slice(index + 1),
            ],
        }));
    }

    render() {
        return (
            <Container className={styles.photoAlbum}>
                <Header className={styles.photoAlbumHeader} as="h1">Photo Gallery</Header>
                <PhotoList className={styles.photoList} photos={this.state.photos}
                           whenLiked={this.likePhoto} whenRemoved={this.removePhotoByIndex}/>
            </Container>
        );
    }
}

function givenInitialState() {
    let photos = [
        {description: 'React', url: 'https://facebook.github.io/react/img/logo.svg'},
        {description: 'Vue.js', url: 'https://vuejs.org/images/logo.png'},
        {description: 'AngularJS', url: 'https://angularjs.org/img/AngularJS-large.png'},
        {description: 'Ember.js', url: 'https://www.emberjs.com/images/learn/ember-4a021047.png'},
        {description: 'Meteor', url: 'http://docs.meteor.com/images/logo-coralspace-left.svg'},
    ].map((photo, index) => ({
        ...photo,
        id: index + 1,
        likes: Math.floor(Math.random() * 10000),
    }));
    return { photos };
}

export default PhotoAlbum;
