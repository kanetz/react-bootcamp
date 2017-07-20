import React from 'react';
import PropTypes from 'prop-types';
import {Form} from 'semantic-ui-react';

class AddPhotoForm extends React.Component {
    constructor(props) {
        super(props);
        this.defaultState = {
            formData: {
                filename: '',
                description: '',
            },
            errors: {},
        };
        this.state = this.defaultState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, {name, value}) {
        console.log('handleChange: ', name, value);
        this.setState(prevState => ({
            ...prevState,
            formData: {
                ...prevState.formData,
                [name]: value,
            },
        }));
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddPhoto({...this.state.formData});
        this.setState(this.defaultState);
    }

    render() {
        const {formData, errors} = this.state;
        return (
            <Form className="add-photo-form ui form" onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Input type="file" name="filename"
                                value={formData.filename} error={errors.filename}
                                onChange={this.handleChange}/>
                    <Form.Input type="text" name="description" placeholder="Title"
                                value={formData.description} error={errors.description}
                                onChange={this.handleChange}/>
                    <Form.Button content="Add" />
                </Form.Group>
            </Form>
        );
    }
}

AddPhotoForm.propTypes = {
    onAddPhoto: PropTypes.func.isRequired,
};

export default AddPhotoForm;
