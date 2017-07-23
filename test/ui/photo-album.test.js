import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import {Header} from 'semantic-ui-react';

import PhotoAlbum from '@components/photo-album';
import PhotoList from '@components/photo-list'

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
});
