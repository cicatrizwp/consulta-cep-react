import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import SearchForm from './SearchForm'

describe('App', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<SearchForm />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});