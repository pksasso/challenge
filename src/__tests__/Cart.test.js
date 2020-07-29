import React, { useContext } from 'react';
import { CartContext, CartProvider } from '../context/CartContext';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import theme from '../styles/Theme';
import Cart from '../components/molecules/Cart';

configure({ adapter: new Adapter() });

const firePokemon = {
  id: 5,
  name: 'charmeleon',
  price: 142,
  sprite:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
};

describe('Cart', () => {
  it('Render items list', () => {
    const TestComponent = () => {
      const { addCartByType, getCartByType } = useContext(CartContext);
      return (
        <div>
          <Cart data-testid='cart' type={'fire'} theme={theme.fire} />
          <button
            data-testid='button'
            onClick={() => addCartByType('fire', firePokemon)}
          ></button>
        </div>
      );
    };

    const wrapper = mount(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    wrapper.find('[data-testid="button"]').simulate('click');

    expect(wrapper.find('div div div img').prop('src')).toEqual(
      firePokemon.sprite
    );
    expect(wrapper.find('div div div p').first().text()).toEqual('charmeleon');
    expect(wrapper.find('div div div p').last().text()).toEqual('R$ 142,00');
  });

  it('Render total price', () => {
    const TestComponent = () => {
      const { addCartByType } = useContext(CartContext);
      return (
        <div>
          <Cart data-testid='cart' type={'fire'} theme={theme.fire} />
          <button
            data-testid='button'
            onClick={() => addCartByType('fire', firePokemon)}
          ></button>
        </div>
      );
    };

    const wrapper = mount(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    wrapper.find('[data-testid="button"]').simulate('click');
    expect(wrapper.find('div div').last().text()).toEqual('Total R$284,00');
  });

  // it('Click checkout button', () => {
  //   const TestComponent = () => {
  //     return (
  //       <div>
  //         <Cart data-testid='cart' type={'fire'} theme={theme.fire} />
  //       </div>
  //     );
  //   };

  //   const wrapper = mount(
  //     <CartProvider>
  //       <TestComponent />
  //     </CartProvider>
  //   );

  //   wrapper.find('button').simulate('click');
  //   expect(wrapper.find('div div').last().text()).toEqual('Total R$284,00');
  // });
});
