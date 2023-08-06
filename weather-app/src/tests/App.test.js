import { render, screen } from "@testing-library/react";
import App from "../components/App";
import forecast from "../data/forecast.json";

test("renders App component correctly", () => {
  render(<App location={forecast.location} forecasts={forecast.forecasts} />);
  const h1Element = screen.getByText(/Edinburgh, UK/i);
  expect(h1Element).toBeInTheDocument();
});
