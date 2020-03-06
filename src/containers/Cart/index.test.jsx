import React from 'react';
import { render } from '@testing-library/react';
import Cart from './index';

describe('the Genre container', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Cart testId="test" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
