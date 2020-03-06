import React from 'react';
import { render } from '@testing-library/react';
import CardList from './index';

describe('the Genre container', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<CardList products={[]} testId="test" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
