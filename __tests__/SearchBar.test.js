import React from 'react';
import renderer from 'react-test-renderer';

import SearchBar from '../src/Helpers/SearchBar';

test('renders correctly', () => {
  const tree = renderer.create(<SearchBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
