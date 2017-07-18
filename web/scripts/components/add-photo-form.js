import React from 'react';
import PropTypes from 'prop-types';

class AddPhotoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filename: '',
            description: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            ...this.state,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddPhoto({...this.state});
    }

    render() {
        return (
            <form className="add-photo-form">
                <input type="file" name="filename"
                       onChange={this.handleChange} />
                <input type="text" name="description" placeholder="Title"
                       onChange={this.handleChange} />
                <input type="submit" value="add"
                       onClick={this.handleSubmit} />
            </form>
        );
    }
}

AddPhotoForm.propTypes = {
    onAddPhoto: PropTypes.func.isRequired,
};

export default AddPhotoForm;
