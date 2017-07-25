import React from 'react';
import {connect} from 'react-redux';
import {Container, Header} from 'semantic-ui-react';

import PhotoList from '@containers/photo-list';

import styles from './photo-album.css';

class PhotoAlbum extends React.Component {
    render() {
        return (
            <Container className={styles.photoAlbum}>
                <Header className={styles.photoAlbumHeader} as="h1">Photo Gallery</Header>
                <PhotoList className={styles.photoList}/>
            </Container>
        );
    }
}

export default connect()(PhotoAlbum);
