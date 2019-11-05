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
});