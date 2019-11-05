import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import InputField from './InputField'

describe('App', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<InputField />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});