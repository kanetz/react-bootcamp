import React from 'react';
import PropTypes from 'prop-types';

class AddPhotoForm extends React.Component {
    constructor(props) {
        super(props);
        this.defaultState = {
            filename: '',
            description: '',
        };
        this.state = {...this.defaultState};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddPhoto({...this.state});
        this.setState({...this.defaultState});
    }

    render() {
        return (
            <form className="add-photo-form">
                <input type="file" name="filename"
                       value={this.state.filename} onChange={this.handleChange} />
                <input type="text" name="description" placeholder="Title"
                       value={this.state.description} onChange={this.handleChange} />
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
