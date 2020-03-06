import React from 'react';
import { render } from '@testing-library/react';
import Card from './index';

describe('the Genre container', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Card id={1} name="name" price={20} quantity={1} link="link" selectedQuantity={1} testId="test" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
