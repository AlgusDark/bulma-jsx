import * as React from 'react';
import { shallow } from 'enzyme';

import { Icon } from './../../src/elements/Icon';

describe('Icon', () => {
    it('should render a span with .icon', () => {
        const component = shallow(<Icon />);
        expect(component.hasClass('icon')).toBe(true);
    });

    it('should render a span.icon with i.fa.fa-home', () => {
        const component = shallow(<Icon className='fa fa-home' />);
        expect(component.contains(
            <span className='icon'>
                <i className='fa fa-home' aria-hidden="true">
                </i>
            </span>
        )).toBe(true);
    });

    it('should render a span with .icon and modifiers', () => {
        const component = shallow(<Icon isAlign='left' />);
        expect(component.hasClass('icon')).toBe(true);
        expect(component.hasClass('is-left')).toBe(true);
    });

    it('should render a span with .icon, modifiers and i with classNames', () => {
        const component = shallow(<Icon isSize='large' className='custom' />);
        expect(component.contains(
            <span className='icon is-large'>
                <i className='custom' aria-hidden="true">
                </i>
            </span>
        )).toBe(true);
    });

    it('should render a span with .icon and i with custom classNames', () => {
        const component = shallow(<Icon className='custom' />);
        expect(component.contains(
            <span className='icon'>
                <i className='custom' aria-hidden="true">
                </i>
            </span>
        )).toBe(true);
    });

    it('should render children instead of icon', () => {
        const component = shallow(<Icon><span>child</span></Icon>)
        expect(component.contains(
            <span className='icon'>
               <span>child</span>
            </span>
        )).toBe(true);
    })
});