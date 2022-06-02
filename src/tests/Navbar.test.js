import React from 'react';
import TestRenderer from 'react-test-renderer';
import { BrowserRouter as Router, Link } from 'react-router-dom';

test('renders correctly', () => {
  const tree = TestRenderer
    .create(<Router><Link to="/">Home</Link></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('render Links', () => {
  test('Home Link', () => {
    const tree = TestRenderer
      .create(<Router><Link to="/">Home</Link></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Calculator Link', () => {
    const tree = TestRenderer
      .create(<Router><Link to="/">Calculator</Link></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Quote Link', () => {
    const tree = TestRenderer
      .create(<Router><Link to="/quote">Quote</Link></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
