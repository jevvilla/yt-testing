import { render, screen } from '@testing-library/react';
import { waitFor, waitForElementToBeRemoved } from '@testing-library/dom';
import fireEvent from '@testing-library/user-event';

import { Counter } from './Counter';

describe('<Counter />', () => {
  it('should render title and default value', () => {
    render(<Counter description="my counter" defaultCount={0} />);

    expect(screen.getByText(/my counter/)).toBeInTheDocument();
    expect(
      screen.getByRole('contentinfo', { name: /countResult/i })
    ).toHaveTextContent(/^0/);
  });

  it('should sum up 1 when plus (+) button is clicked', async () => {
    render(<Counter description="my counter" defaultCount={0} />);

    fireEvent.click(screen.getByRole('button', { name: '+' }));

    await waitFor(() =>
      expect(
        screen.getByRole('contentinfo', { name: /countResult/i })
      ).toHaveTextContent(/^1/)
    );
  });

  it('should subtract 1 when less (-) button is clicked', () => {
    render(<Counter description="my counter" defaultCount={0} />);

    fireEvent.click(screen.getByRole('button', { name: '-' }));

    expect(
      screen.getByRole('contentinfo', { name: /countResult/i })
    ).toHaveTextContent(/^-1/);
  });

  it('should increment correct amount according to the incrementor value', async () => {
    render(<Counter description="my counter" defaultCount={0} />);

    const incrementorInput = screen.getByRole('textbox', {
      name: /incrementor/i,
    });
    expect(incrementorInput).toBeInTheDocument();

    fireEvent.type(incrementorInput, '{selectall}5');
    fireEvent.click(screen.getByRole('button', { name: '+' }));

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/));

    await waitFor(() =>
      expect(
        screen.getByRole('contentinfo', { name: /countResult/i })
      ).toHaveTextContent(/^5$/)
    );
  });
});
