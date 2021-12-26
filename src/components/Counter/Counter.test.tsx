import { render, screen } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import fireEvent from '@testing-library/user-event';

import { Counter } from './Counter';
import { useCounter } from './counterContext';

describe('<Counter />', () => {
  it('should render title and default value', () => {
    render(<Counter description="my counter" defaultCount={0} />);

    expect(screen.getByText(/my counter/)).toBeInTheDocument();
    expect(
      screen.getByRole('contentinfo', { name: /countResult/i })
    ).toHaveTextContent(/^0/);
  });

  it('should sum up 1 when increment (+) button is clicked', async () => {
    render(<Counter description="my counter" defaultCount={0} />);

    fireEvent.click(screen.getByRole('button', { name: /increment/i }));

    await waitFor(() =>
      expect(
        screen.getByRole('contentinfo', { name: /countResult/i })
      ).toHaveTextContent(/^1/)
    );
  });

  it('should subtract 1 when less (-) button is clicked', () => {
    render(<Counter description="my counter" defaultCount={0} />);

    fireEvent.click(screen.getByRole('button', { name: /decrement/i }));

    expect(
      screen.getByRole('contentinfo', { name: /countResult/i })
    ).toHaveTextContent(/^-1/);
  });

  it('should increment correct amount according to the incrementor value', () => {
    render(<Counter description="my counter" defaultCount={0} />);

    const incrementorInput = screen.getByRole('textbox', {
      name: /incrementor/i,
    });
    expect(incrementorInput).toBeInTheDocument();

    fireEvent.type(incrementorInput, '{selectall}5');
    fireEvent.click(screen.getByRole('button', { name: /increment/i }));

    expect(
      screen.getByRole('contentinfo', { name: /countResult/i })
    ).toHaveTextContent(/^5$/);
  });

  it('should throw error when trying to use context out of the Provide', () => {
    const { counter } = useCounter();
  });
});
