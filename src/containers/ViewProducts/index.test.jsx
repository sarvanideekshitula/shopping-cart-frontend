import React from 'react';
import { render } from '@testing-library/react';
import ViewProducts from './index';

describe('the Genre container', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<ViewProducts testId="test" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
