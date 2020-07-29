import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CartIcon from '../components/atoms/CartIcon';
import cart from '../assets/cart.svg';

configure({ adapter: new Adapter() });

describe('Cart icon', () => {
  it('Render cart icon', () => {
    const wrapper = render(<CartIcon />);
    expect(wrapper.find('button img').prop('src')).toEqual(cart);
  });
});
