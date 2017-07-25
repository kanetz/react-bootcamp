import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Card, Message} from 'semantic-ui-react';

import Photo from '@containers/photo';

class PhotoList extends React.Component {
    render() {
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
});

export default connect(mapStateToProps)(PhotoList);
