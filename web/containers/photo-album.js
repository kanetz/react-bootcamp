import React from 'react';
import {connect} from 'react-redux';
import {Container, Header} from 'semantic-ui-react';

import PhotoList from '@containers/photo-list';
import {load} from '../actions';
import styles from './photo-album.css';

class PhotoAlbum extends React.Component {
    componentDidMount() {
        this.props.load();
    }

    render() {
        return (
            <Container className={styles.photoAlbum}>
                <Header className={styles.photoAlbumHeader} as="h1">Photo Gallery</Header>
                <PhotoList className={styles.photoList}/>
            </Container>
        );
    }
}

const mapDispatchToProps = {load};

export default connect(null, mapDispatchToProps)(PhotoAlbum);
