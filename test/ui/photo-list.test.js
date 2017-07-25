import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import PhotoList from '@containers/photo-list'
import Photo from '@containers/photo';

describe('<PhotoList>', () => {
    it('should render <Photo> according to given photos with id as key', () => {
        const photos = [{id: 1}, {id: 2}];

        const wrapper = shallow(<PhotoList photos={photos}/>);

        const photoList = wrapper.find(Photo);
        expect(photoList).to.have.length(photos.length);
        photos.forEach((photo, index) => {
            expect(photoList.at(index).key()).to.equal(String(photo.id));
        });
    });
});
