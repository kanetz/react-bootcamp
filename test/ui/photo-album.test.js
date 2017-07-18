// @flow

import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import PhotoAlbum from '../../web/scripts/components/photo-album';

describe('<PhotoAlbum>', () => {
    it('should render a header', () => {
        const wrapper = shallow(<PhotoAlbum/>);
        expect(wrapper.contains(<h1>Photo Gallery</h1>)).to.equal(true);
    });

    it('should render a photo list', () => {
        const photos = [
            {id: 1},
            {id: 2}
        ];

        const wrapper = shallow(<PhotoAlbum photos={photos}/>);
        console.log(wrapper.html());
        const photoList = wrapper.find('.photo-list');
        expect(photoList.exists()).to.equal(true);
        expect(photoList.find('.photo-item')).to.have.length(photos.length);
    });
});