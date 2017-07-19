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
            wrapper.setState(expectedFormData);

            wrapper.find('button').simulate('click');

            expect(callback.alwaysCalledWithExactly(expectedFormData)).to.be.true;
        });

        it('should clear form data', () => {
            wrapper.find('button').simulate('click');

            ['filename', 'description'].forEach(fieldName => {
                expect(wrapper.state(fieldName), `${fieldName} should be cleared`).to.be.empty;
            });
        });
    });
});
