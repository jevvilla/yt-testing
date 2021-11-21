import { render, screen } from "@testing-library/react";

import { Hello } from "./Hello";

// describe("<Hello /> ", () => {
it("Should render Hello", () => {
  render(<Hello />);
  const greet = screen.getByText(/Hello/);
  expect(greet).toBeInTheDocument();
});
// });
