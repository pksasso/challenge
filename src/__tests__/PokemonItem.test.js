import React, { useContext } from 'react';
import { mount, configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { CartContext, CartProvider } from '../context/CartContext';
import PokemonItem from '../components/atoms/PokemonItem';
import theme from '../styles/Theme';
import pokeballSprite from '../assets/pokeballSprite.svg';

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
  sprite: null,
};

describe('Pokemon Item', () => {
  it('Props recieve', () => {
    const wrapper = mount(
      <PokemonItem
        data-testid='pokemon-item'
        pokemon={firePokemon}
        type={'fire'}
        theme={theme.fire}
      />
    );
    expect(wrapper.props().type).toEqual('fire');
    expect(wrapper.props().theme).toEqual(theme.fire);
    expect(wrapper.props().pokemon).toEqual(firePokemon);
  });

  it('Render pokemon name and price', () => {
    const wrapper = render(
      <PokemonItem
        data-testid='pokemon-item'
        pokemon={firePokemon}
        type={'fire'}
        theme={theme.fire}
      />
    );

    const text = wrapper.find('div div span');
    const image = wrapper.find('div div img');
    expect(text.text()).toEqual('charmeleonR$ 142,00');
    expect(image.prop('src')).toEqual(firePokemon.sprite);
  });

  it('Render pokemon image if defined', () => {
    const wrapper = render(
      <PokemonItem
        data-testid='pokemon-item'
        pokemon={firePokemon}
        type={'fire'}
        theme={theme.fire}
      />
    );

    const image = wrapper.find('div div img');
    expect(image.prop('src')).toEqual(firePokemon.sprite);
  });

  it('Render pokemon image if undefined', () => {
    const wrapper = render(
      <PokemonItem
        data-testid='pokemon-item'
        pokemon={waterPokemon}
        type={'water'}
        theme={theme.water}
      />
    );

    const image = wrapper.find('div div img');
    expect(image.prop('src')).toEqual(pokeballSprite);
  });

  it('Click in buy button add pokemon to cart', () => {
    const TestComponent = () => {
      const { getCartByType } = useContext(CartContext);
      return (
        <div>
          <PokemonItem
            data-testid='pokemon-item'
            pokemon={firePokemon}
            type={'fire'}
            theme={theme.fire}
          />
          <div data-testid='cart'>{JSON.stringify(getCartByType('fire'))}</div>;
        </div>
      );
    };

    const wrapper = mount(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    wrapper.find('button').simulate('click');
    expect(wrapper.find('[data-testid="cart"]').text()).toEqual(
      JSON.stringify([firePokemon])
    );
  });
});
