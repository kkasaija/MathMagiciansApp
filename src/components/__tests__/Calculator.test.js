import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Calculator from '../Calculator';

describe('Test render Calculator component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Simulation of user clicking button 8 twice', () => {
    render(<Calculator />);
    const buttonBtn = screen.getByText(/8/i);
    userEvent.click(buttonBtn);
    userEvent.click(buttonBtn);
    expect(screen.getByText(/88/i)).toBeInTheDocument();
  });
});
