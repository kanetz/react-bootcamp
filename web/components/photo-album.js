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
        {description: 'Babel', url: 'https://raw.githubusercontent.com/babel/logo/master/babel.png'},
        {description: 'Webpack', url:'https://camo.githubusercontent.com/d18f4a7a64244f703efcb322bf298dcb4ca38856/68747470733a2f2f7765627061636b2e6a732e6f72672f6173736574732f69636f6e2d7371756172652d6269672e737667'},
        {description: 'PostCSS', url: 'http://postcss.org/_/web_modules/Hero/postcss.svg'},
    ].map((photo, index) => ({
        ...photo,
        id: index + 1,
        likes: Math.floor(100 + Math.random() * 900),
    }));
    return { photos };
}

export default PhotoAlbum;
