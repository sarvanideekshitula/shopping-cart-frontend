import React from 'react';
import { render } from '@testing-library/react';
import Nav from './index';

describe('the Genre container', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Nav testId="test" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
