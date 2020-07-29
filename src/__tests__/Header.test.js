import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import theme from '../styles/Theme';
import Header from '../components/atoms/Header';
import water from '../assets/water.svg';
import fire from '../assets/fire.svg';

configure({ adapter: new Adapter() });

describe('Header', () => {
  it('Render fire type', () => {
    const wrapper = render(
      <Header logo={fire} label='Fire Store' theme={theme.fire} />
    );
    expect(wrapper.find('div div img').prop('src')).toEqual(fire);
    expect(wrapper.find('div div h1').text()).toEqual('Fire Store');
  });
  it('Render water type', () => {
    const wrapper = render(
      <Header logo={water} label='Water Store' theme={theme.water} />
    );
    expect(wrapper.find('div div img').prop('src')).toEqual(water);
    expect(wrapper.find('div div h1').text()).toEqual('Water Store');
  });
});
