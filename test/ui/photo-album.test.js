import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import {Header} from 'semantic-ui-react';

import PhotoAlbum from '@components/photo-album';
import PhotoList from '@components/photo-list'
import AddPhotoForm from '@components/add-photo-form';

describe('<PhotoAlbum>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<PhotoAlbum/>);
    });

    it('should render <Header>', () => {
        expect(wrapper.find(Header).exists()).to.be.true;
    });

    it('should render <PhotoList>', () => {
        expect(wrapper.find(PhotoList).exists()).to.be.true;
    });

    it('should render <AddPhotoFrom>', () => {
        expect(wrapper.find(AddPhotoForm).exists()).to.be.true;
    });

    describe('addPhoto()', () => {
        it('should add new photo into list', () => {
            const photoSize = wrapper.state().photos.length;
            const newPhoto = {id: photoSize + 1};

            wrapper.instance().addPhoto(newPhoto);

            const photos = wrapper.state().photos;
            expect(photos).to.have.length(photoSize + 1);
            const actualNewPhoto = photos.find(photo => photo.id === newPhoto.id);
            expect(actualNewPhoto).to.eql(newPhoto);
        });
    });
});
