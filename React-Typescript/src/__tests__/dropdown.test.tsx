import { render, screen } from "@testing-library/react";
import DropDownComponent from "../components/dropdown";

test("testing drop down", () => {
  render(<DropDownComponent></DropDownComponent>);

  const element = screen.getByText(/Drop down test/i);

  expect(element).toBeInTheDocument();
});
