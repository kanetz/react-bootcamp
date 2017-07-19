// @flow

import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import PhotoAlbum from '@components/photo-album';
import AddPhotoForm from '@components/add-photo-form';
import Photo from '@components/photo';

describe('<PhotoAlbum>', () => {
    it('should render a header', () => {
        const wrapper = shallow(<PhotoAlbum/>);
        expect(wrapper.contains(<h1>Photo Gallery</h1>)).to.equal(true);
    });

    it('should render an <AddPhotoFrom/>', () => {
        const wrapper = shallow(<PhotoAlbum/>);
        expect(wrapper.find(AddPhotoForm).exists()).to.equal(true);
    });

    it('should render a photo list', () => {
        const photos = [
            {id: 1, description: 'desc 1', url: ''},
            {id: 2, description: 'desc 2', url: ''}
        ];

        const wrapper = shallow(<PhotoAlbum photos={photos}/>);

        const photoList = wrapper.find('.photo-list');
        expect(photoList.exists()).to.equal(true);
        expect(photoList.find(Photo)).to.have.length(photos.length);
    });
});
