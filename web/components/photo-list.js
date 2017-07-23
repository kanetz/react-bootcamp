import React from 'react';
import PropTypes from 'prop-types';
import {Card, Message} from 'semantic-ui-react';
import Photo from '@components/photo';

class PhotoList extends React.Component {
    render() {
        return this.props.photos.length > 0 ? (
            <Card.Group className={this.props.className} itemsPerRow="four">
                {this.props.photos.map((photo, index) => (
                    <Photo key={photo.id} photo={photo} index={index}
                           whenLiked={this.props.whenLiked}
                           whenRemoved={this.props.whenRemoved}/>
                ))}
            </Card.Group>
        ) : (
            <Message icon="comment outline" content="There're no photos to show for the moment."/>
        );
    }
}

PhotoList.propTypes = {
    className: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })).isRequired,
    whenLiked: PropTypes.func,
    whenRemoved: PropTypes.func,
};

export default PhotoList;
