import React from 'react';
import Quote from '../../components/Quote';
import renderer from 'react-test-renderer';

describe('testing Quote component functionality', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
