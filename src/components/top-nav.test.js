import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {

    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Should run the onRestartGame callback when clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onRestartGame={callback} />);
        const link = wrapper.find('.new');
        link.simulate('click');
        expect(callback).toHaveBeenCalled();
    });

    it('Should provide an Aurual Update when on screen reader', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
        const link = wrapper.find('.status-link');
        link.simulate('click');
        expect(callback).toHaveBeenCalled();
    });
});