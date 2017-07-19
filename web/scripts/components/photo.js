import React from 'react';
import PropTypes from 'prop-types';

class Photo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <dl>
                <dt>{this.props.photo.description}</dt>
                <dd><img className="photo-image" src={this.props.photo.url}
                         title="photo.description" alt={this.props.photo.description}/></dd>
            </dl>
        );
    }
}

Photo.propTypes = {
    photo: PropTypes.shape({
        description: PropTypes.string,
        url: PropTypes.string,
    }).isRequired,
};

export default Photo;
