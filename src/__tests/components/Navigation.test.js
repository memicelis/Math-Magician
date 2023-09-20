import React from 'react';
import Navigation from '../../components/Navigation';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

it('testing Navigation component', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
