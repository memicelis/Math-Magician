import React from 'react';
import Calculator from '../../components/Calculator';
import renderer from 'react-test-renderer';

describe('testing Calculator component rendering', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
