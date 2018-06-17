import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {

    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Should render guess count feedback', () => {
        const value = 6;
        const wrapper = shallow(<GuessCount guessCount={value}/>);
        expect(wrapper.text()).toEqual(`You've made ${value} guesses!`);
    });
});