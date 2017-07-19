import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import {Header} from 'semantic-ui-react';

import PhotoAlbum from '@components/photo-album';
import PhotoList from '@components/photo-list'
import AddPhotoForm from '@components/add-photo-form';

describe('<PhotoAlbum>', () => {
    it('should render <Header>', () => {
        const wrapper = shallow(<PhotoAlbum/>);
        expect(wrapper.find(Header).exists()).to.equal(true);
    });

    it('should render <PhotoList>', () => {
        const wrapper = shallow(<PhotoAlbum/>);
        expect(wrapper.find(PhotoList).exists()).to.equal(true);
    });

    it('should render <AddPhotoFrom>', () => {
        const wrapper = shallow(<PhotoAlbum/>);
        expect(wrapper.find(AddPhotoForm).exists()).to.equal(true);
    });
});
