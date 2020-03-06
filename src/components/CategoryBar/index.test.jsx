import React from 'react';
import { render } from '@testing-library/react';
import CategoryBar from './index';

describe('the Genre container', () => {
  it('should render correctly', () => {
    const click = jest.fn();
    const { asFragment } = render(<CategoryBar buttonClick={click} categories={[]} testId="test" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
