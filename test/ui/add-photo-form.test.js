import React from 'react';
import {expect} from 'chai';
import {spy} from 'sinon';
import {mount} from 'enzyme';

import AddPhotoForm from '@components/add-photo-form';

describe('<AddPhotoForm>', () => {
    describe('when add photo button is clicked', () => {
        let callback, wrapper;

        beforeEach(() => {
            callback = spy();
            wrapper = mount(<AddPhotoForm onAddPhoto={callback}/>);
        });

        it('should invoke callback with form data when add photo button is clicked', () => {
            const expectedFormData = {filename: 'filename', description: 'description'};
            wrapper.setState({formData: expectedFormData});

            wrapper.find('form').simulate('submit');

            expect(callback.calledWith(expectedFormData), 'callback should be invoked').to.be.true;
        });

        it('should clear form data', () => {
            wrapper.find('button').simulate('click');

            const fieldsToCheck = ['filename', 'description'];
            fieldsToCheck.forEach(field => {
                expect(wrapper.state().formData[field], `${field} should be cleared`).to.be.empty;
            });
        });
    });
});
