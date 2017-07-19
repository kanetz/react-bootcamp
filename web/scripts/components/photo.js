import React from 'react';
import PropTypes from 'prop-types';
import {Card, Image} from 'semantic-ui-react';

class Photo extends React.Component {
    render() {
        const photo = this.props.photo;
        return (
            <Card>
                <Image src={photo.url}/>
                <Card.Content>
                    <Card.Header className="photo-description">{photo.description}</Card.Header>
                </Card.Content>
            </Card>
        );
    }
}

Photo.propTypes = {
    photo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string,
        url: PropTypes.string,
    }).isRequired,
};

export default Photo;
