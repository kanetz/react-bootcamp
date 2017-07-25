import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Card, Message, Icon} from 'semantic-ui-react';

import Photo from '@containers/photo';

class PhotoList extends React.Component {
    render() {
        if(this.props.loading) {
            return(
                <Message icon>
                    <Icon name="circle notched" loading/>
                    <Message.Content>Loading photos...</Message.Content>
                </Message>
            );
        }

        if(this.props.error) {
            return(
                <Message negative icon>
                    <Icon name="warning circle"/>
                    <Message.Content>{`Error occurred: "${this.props.error.message}"`}</Message.Content>
                </Message>
            );
        }

        const photos = this.props.photos;

        return photos.length > 0 ? (
            <Card.Group className={this.props.className} itemsPerRow="four">
                {photos.map((photo, index) => (
                    <Photo key={photo.id} index={index}/>
                ))}
            </Card.Group>
        ) : (
            <Message icon="comment outline" content="There're no photos to show for the moment."/>
        );
    }
}

PhotoList.propTypes = {
    className: PropTypes.string
};

const mapStateToProps = state => ({
    photos: state.photos,
    loading: state.loading,
    error: state.error,
});

export default connect(mapStateToProps)(PhotoList);
