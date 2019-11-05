import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Button from './Button'

describe('App', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Button />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the search message', () => {
    const wrapper = mount(<Button />);
    console.log(wrapper)
    expect(wrapper.text()).toEqual("Buscar");
  });
});