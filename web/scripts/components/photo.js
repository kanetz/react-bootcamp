import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    Image,
    Button,
} from 'semantic-ui-react';

class Photo extends React.Component {
    constructor(props) {
        super(props);
    }

    like() {
        this.setState(prevState => ({
            ...prevState,
            photo: {
                ...prevState.photo,
                likes: (prevState.likes || 0) + 1,
            }
        }));
    }

    render() {
        const photo = this.props.photo;
        return (
            <Card>
                <Image src={photo.url}/>

                <Card.Content>
                    <Card.Header className="photo-description">{photo.description}</Card.Header>
                </Card.Content>

                <Card.Content extra>
                    <Button basic content="Like" icon="heart"
                            label={{content: photo.likes || 0}}
                            onClick={() => this.props.whenLiked(photo)}/>
                    <Button className="right floated" basic circular icon='remove'
                            onClick={() => this.props.whenRemoved(this.props.index)}/>
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
    index: PropTypes.number.isRequired,
    whenLiked: PropTypes.func,
    whenRemoved: PropTypes.func,
};

export default Photo;
