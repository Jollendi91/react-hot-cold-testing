import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {

    it('Renders without crashing', () => {
        shallow(<Game />);
    });

    it('Can start a new game', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            guesses: [1, 2, 3, 4],
            feedback: 'Awesome',
            correctAnswer: -5
        });

        wrapper.instance().restartGame();
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
        expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
    });

    it('Can make a guess', () => {
        const wrapper= shallow(<Game />);
        wrapper.setState({
            correctAnswer: 100
        });
        wrapper.instance().makeGuess(25)
        expect(wrapper.state('guesses')).toEqual([25]);
        expect(wrapper.state('feedback')).toEqual("You're Ice Cold...");

        wrapper.instance().makeGuess(55);
        expect(wrapper.state('guesses')).toEqual([25, 55]);
        expect(wrapper.state('feedback')).toEqual("You're Cold...");

        wrapper.instance().makeGuess(89);
        expect(wrapper.state('guesses')).toEqual([25, 55, 89]);
        expect(wrapper.state('feedback')).toEqual("You're Warm.");

        wrapper.instance().makeGuess(95);
        expect(wrapper.state('guesses')).toEqual([25, 55, 89, 95]);
        expect(wrapper.state('feedback')).toEqual("You're Hot!");

        wrapper.instance().makeGuess(100);
        expect(wrapper.state('guesses')).toEqual([25, 55, 89, 95, 100]);
        expect(wrapper.state('feedback')).toEqual("You got it!");
    });
});