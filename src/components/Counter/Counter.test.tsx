import { render, screen } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('<Counter />', () => {
  it('should render title and default value', () => {
    render(<Counter description="my counter" defaultCount={0} />);

    expect(screen.getByText(/my counter/)).toBeInTheDocument();
    expect(screen.getByText(/Current count: 0/)).toBeInTheDocument();
  });

  it('should sum up 1 when plus (+) button is clicked', () => {
    render(<Counter description="my counter" defaultCount={0} />);

    fireEvent.click(screen.getByRole('button', { name: '+' }));

    expect(screen.getByText(/Current count: 1/)).toBeInTheDocument();
  });

  it('should subtract 1 when less (-) button is clicked', () => {
    render(<Counter description="my counter" defaultCount={0} />);

    fireEvent.click(screen.getByRole('button', { name: '-' }));

    expect(screen.getByText(/Current count: -1/)).toBeInTheDocument();
  });
});
