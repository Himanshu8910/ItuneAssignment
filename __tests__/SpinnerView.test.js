import React from 'react';
import renderer from 'react-test-renderer';

import SpinnerView from '../src/Helpers/SpinnerView';

test('renders correctly', () => {
  const tree = renderer.create(<SpinnerView />).toJSON();
  expect(tree).toMatchSnapshot();
});
