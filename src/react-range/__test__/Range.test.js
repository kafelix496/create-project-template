import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import Range from '../Range';

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('check Range attribute', () => {
  render(
    <Range min={0} max={10} value={5} />,
  );

  expect(screen.getByTestId('range-test').getAttribute('min')).toEqual('0');
});
