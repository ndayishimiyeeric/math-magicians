import React from 'react';
import TestRenderer from 'react-test-renderer';
import Home from '../components/Home';

test('renders correctly', () => {
  const tree = TestRenderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
