import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../components/Button';

it('Button renders correctly', () => {
  const tree = renderer
    .create(<Button value="5" onClick={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Button renders correctly when value is 0', () => {
  const tree = renderer
    .create(<Button value="0" onClick={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
