import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal from 'react-modal';

import { CartProvider } from '../context/CartContext';

import CheckoutModal from '../components/molecules/CheckoutModal';

configure({ adapter: new Adapter() });

const firePokemon = {
  id: 5,
  name: 'charmeleon',
  price: 142,
  sprite:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
};

describe('Checkout Modal', () => {
  it('Render without error', () => {
    const TestComponent = () => {
      return <CheckoutModal />;
    };

    const wrapper = mount(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    expect(wrapper.find(Modal)).toHaveLength(1);
  });
});
