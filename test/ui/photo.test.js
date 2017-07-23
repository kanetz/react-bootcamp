import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';

import Photo from '@components/photo';
import {Image} from 'semantic-ui-react';

describe('<Photo>', () => {
    it('should render description of given photo', () => {
        const photo = {id: 1, description: 'desc'};
        const wrapper = mount(<Photo photo={photo} index={1}/>);
        expect(wrapper.find('.photo-description').first().text()).to.equal(photo.description);
    });

    it('should render image of given photo', () => {
        const photo = {id: 1, url: 'imageUrl'};
        const wrapper = mount(<Photo photo={photo} index={1}/>);
        expect(wrapper.find(Image).prop('src')).to.equal(photo.url);
    });
});
