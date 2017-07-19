import React from 'react';
import PropTypes from 'prop-types';
import {Form} from 'semantic-ui-react';

class AddPhotoForm extends React.Component {
    constructor(props) {
        super(props);
        this.defaultState = {
            filename: '',
            description: '',
        };
        this.state = this.defaultState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const delta = {[event.target.name]: event.target.value};
        this.setState(prevState => ({...prevState, ...delta}));
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddPhoto({...this.state});
        this.setState(this.defaultState);
    }

    render() {
        return (
            <Form className="add-photo-form ui form">
                <Form.Group>
                    <Form.Input type="file" name="filename"
                                value={this.state.filename} onChange={this.handleChange}/>
                    <Form.Input type="text" name="description" placeholder="Title"
                                value={this.state.description} onChange={this.handleChange}/>
                    <Form.Button onClick={this.handleSubmit}>Add</Form.Button>
                </Form.Group>
            </Form>
        );
    }
}

AddPhotoForm.propTypes = {
    onAddPhoto: PropTypes.func.isRequired,
};

export default AddPhotoForm;
