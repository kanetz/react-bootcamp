import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'semantic-ui-react';
import Photo from './photo';

class PhotoList extends React.Component {
    render() {
        const photos = this.props.photos;
        return (
            <Card.Group>
                {photos.map(photo => (<Photo key={photo.id} photo={photo}/>))}
            </Card.Group>
        );
    }
}

PhotoList.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string,
        url: PropTypes.string,
    })).isRequired,
};

export default PhotoList;
