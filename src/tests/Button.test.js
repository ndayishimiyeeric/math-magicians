import React from 'react';
import TestRenderer from 'react-test-renderer';
import Button from '../components/Button';

/* eslint-disable quotes */

test('props', () => {
  const tree = TestRenderer
    .create(<Button />)
    .root;
  expect(tree.findByType(Button).props.className).toBe("side-color");
});

test('renders correctly', () => {
  const tree = TestRenderer
    .create(<Button />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
