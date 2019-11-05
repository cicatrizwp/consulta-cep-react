import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import MapComponent from './MapComponent'

describe('App', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<MapComponent />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});