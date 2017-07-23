import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'semantic-ui-react';
import Photo from './photo';

class PhotoList extends React.Component {
    render() {
        return (
            <Card.Group className={this.props.className} itemsPerRow="three">
                {this.props.photos.map((photo, index) => (
                    <Photo key={photo.id} photo={photo} index={index}
                           whenLiked={this.props.whenLiked}
                           whenRemoved={this.props.whenRemoved}/>
                ))}
            </Card.Group>
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
