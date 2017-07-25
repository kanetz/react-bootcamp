import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, Card, Container, Image} from 'semantic-ui-react';

import styles from './photo.css';
import {like, remove} from '../state/actions';

class Photo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const photo = this.props.photo;
        return (
            <Card raised>
                <Container className={styles.imageContainer}>
                    <Image src={photo.url} fluid shape="rounded" verticalAlign="middle"/>
                </Container>

                <Card.Content>
                    <Card.Header className="photo-description">{photo.description}</Card.Header>
                </Card.Content>

                <Card.Content extra>
                    <Button icon="empty heart" content="Like"
                            label={{content: photo.likes || 0}}
                            onClick={() => this.props.like(this.props.index)}/>
                    <Button className="right floated" circular icon='remove'
                            onClick={() => this.props.remove(this.props.index)}/>
                </Card.Content>
            </Card>
        );
    }
}

Photo.propTypes = {
    index: PropTypes.number.isRequired,
};

const mapStateToProps = (state, props) => {
    return {
        photo: state.photos[props.index],
    };
};

const mapDispatchToProps = {
    like,
    remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
