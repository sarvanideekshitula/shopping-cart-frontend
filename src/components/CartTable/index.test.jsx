import React from 'react';
import { render } from '@testing-library/react';
import CartTable from './index';

describe('the Genre container', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<CartTable cart={{}} categories={[]} testId="test" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
