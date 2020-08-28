import React from 'react';
import renderer from 'react-test-renderer';

import ListItemView from '../src/Components/ListItemView';
import mockData from './mockData.json';

const item = mockData.results[0];

test('renders correctly with data', () => {
  const tree = renderer.create(<ListItemView data={item} />).toJSON();
  expect(tree).toMatchSnapshot();
});

