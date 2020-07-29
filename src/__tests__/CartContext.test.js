import React, { useContext } from 'react';
import { CartContext, CartProvider } from '../context/CartContext';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const firePokemon = {
  id: 5,
  name: 'charmeleon',
  price: 142,
  sprite:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
};

const waterPokemon = {
  id: 7,
  name: 'squirtle',
  price: 63,
  sprite:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
};

describe('Cart context', () => {
  it('Add a pokemon to fire cart and return actual cart', () => {
    const TestComponent = () => {
      const { addCartByType, getCartByType } = useContext(CartContext);
      return (
        <div>
          <div data-testid='cart'>{JSON.stringify(getCartByType('fire'))}</div>;
          <button
            onClick={() => {
              addCartByType('fire', firePokemon);
            }}
          >
            Add
          </button>
        </div>
      );
    };

    const wrapper = mount(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    expect(wrapper.find('[data-testid="cart"]').text()).toEqual('[]');
    wrapper.find('button').simulate('click');
    expect(wrapper.find('[data-testid="cart"]').text()).toEqual(
      JSON.stringify([firePokemon])
    );
  });

  it('Add a pokemon to water cart and return actual cart', () => {
    const TestComponent = () => {
      const { addCartByType, getCartByType } = useContext(CartContext);
      return (
        <div>
          <div data-testid='cart'>{JSON.stringify(getCartByType('water'))}</div>
          ;
          <button
            onClick={() => {
              addCartByType('water', waterPokemon);
            }}
          >
            Add
          </button>
        </div>
      );
    };

    const wrapper = mount(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    expect(wrapper.find('[data-testid="cart"]').text()).toEqual('[]');
    wrapper.find('button').simulate('click');
    expect(wrapper.find('[data-testid="cart"]').text()).toEqual(
      JSON.stringify([waterPokemon])
    );
  });

  it('Get total price in fire cart', () => {
    const TestComponent = () => {
      const { getTotalPriceByType } = useContext(CartContext);
      return (
        <div>
          <div data-testid='cart'>{getTotalPriceByType('fire').toString()}</div>
          ;
        </div>
      );
    };

    const wrapper = mount(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    expect(wrapper.find('[data-testid="cart"]').text()).toEqual('142');
  });

  it('Get total price in water cart', () => {
    const TestComponent = () => {
      const { getTotalPriceByType } = useContext(CartContext);
      return (
        <div>
          <div data-testid='cart'>
            {getTotalPriceByType('water').toString()}
          </div>
          ;
        </div>
      );
    };

    const wrapper = mount(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    expect(wrapper.find('[data-testid="cart"]').text()).toEqual('63');
  });

  it('Clear fire cart', () => {
    const TestComponent = () => {
      const {
        clearCartByType,
        getCartByType,
        getTotalPriceByType,
      } = useContext(CartContext);
      return (
        <div>
          <div data-testid='cartList'>
            {JSON.stringify(getCartByType('fire'))}
          </div>
          <div data-testid='cartPrice'>
            {getTotalPriceByType('fire').toString()}
          </div>
          ;
          <button
            onClick={() => {
              clearCartByType('fire');
            }}
          >
            Add
          </button>
        </div>
      );
    };

    const wrapper = mount(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    expect(wrapper.find('[data-testid="cartList"]').text()).toEqual(
      JSON.stringify([firePokemon])
    );
    expect(wrapper.find('[data-testid="cartPrice"]').text()).toEqual('142');
    wrapper.find('button').simulate('click');
    expect(wrapper.find('[data-testid="cartList"]').text()).toEqual(
      JSON.stringify([])
    );
    expect(wrapper.find('[data-testid="cartPrice"]').text()).toEqual('0');
  });
  it('Clear water cart', () => {
    const TestComponent = () => {
      const {
        clearCartByType,
        getCartByType,
        getTotalPriceByType,
      } = useContext(CartContext);
      return (
        <div>
          <div data-testid='cartList'>
            {JSON.stringify(getCartByType('water'))}
          </div>
          <div data-testid='cartPrice'>
            {getTotalPriceByType('water').toString()}
          </div>
          ;
          <button
            onClick={() => {
              clearCartByType('water');
            }}
          >
            Add
          </button>
        </div>
      );
    };

    const wrapper = mount(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    expect(wrapper.find('[data-testid="cartList"]').text()).toEqual(
      JSON.stringify([waterPokemon])
    );
    expect(wrapper.find('[data-testid="cartPrice"]').text()).toEqual('63');
    wrapper.find('button').simulate('click');
    expect(wrapper.find('[data-testid="cartList"]').text()).toEqual(
      JSON.stringify([])
    );
    expect(wrapper.find('[data-testid="cartPrice"]').text()).toEqual('0');
  });
});
