import React from 'react';
import PropTypes from 'prop-types';
import {Card, Image, Icon} from 'semantic-ui-react';

class Photo extends React.Component {
    render() {
        const photo = this.props.photo;
        return (
            <Card>
                <Image src={photo.url}/>
                <Card.Content>
                    <Card.Header className="photo-description">{photo.description}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <a className="right floated">
                        <Icon name='heart' />
                        {photo.likes || 0} likes
                    </a>
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
        likes: PropTypes.number,
    }).isRequired,
};

export default Photo;
