import React from 'react';
import renderer from 'react-test-renderer';

import ListView from '../src/Components/ListView';
import mockData from './mockData.json';

test('renders correctly', () => {
  const tree = renderer.create(<ListView data={mockData} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders empty state', () => {
  const tree = renderer.create(<ListView />).toJSON();
  expect(tree).toMatchSnapshot();
});
