import React from 'react';
import TestRenderer from 'react-test-renderer';
import Quote from '../components/Quote';

/* eslint-disable quotes */

test('renders correctly', () => {
  const tree = TestRenderer
    .create(<Quote />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
