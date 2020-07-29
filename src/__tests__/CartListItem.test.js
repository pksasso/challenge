import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CartListItem from '../components/atoms/CartListItem';
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

describe('Cart List Item', () => {
  it('Render item with image', () => {
    const wrapper = render(<CartListItem pokemon={firePokemon} />);

    const text = wrapper.find('div p');
    const image = wrapper.find('div img');
    expect(text.text()).toEqual('charmeleonR$ 142,00');
    expect(image.prop('src')).toEqual(firePokemon.sprite);
  });

  it('Render item without image', () => {
    const wrapper = render(<CartListItem pokemon={waterPokemon} />);

    const text = wrapper.find('div p');
    const image = wrapper.find('div img');
    expect(text.text()).toEqual('squirtleR$ 63,00');
    expect(image.prop('src')).toEqual(pokeballSprite);
  });
});
