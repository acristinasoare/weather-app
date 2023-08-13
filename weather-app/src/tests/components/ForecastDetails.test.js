import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    humidity: 30,
    temperature: {
      min: 20,
      max: 23,
    },
    wind: {
      speed: 15,
      direction: "s",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByTestId, getByText } = render(
      <ForecastDetails forecast={validProps} />
    );

    expect(getByTestId("forecast-details")).toBeInTheDocument();
    expect(getByText("Thu Jan 01 1970")).toBeInTheDocument();
    expect(getByText("Humidity: 30 %")).toBeInTheDocument();
    expect(getByText("Min temperature: 20°C")).toBeInTheDocument();
    expect(getByText("Max temperature: 23°C")).toBeInTheDocument();
    expect(getByText("Wind speed: 15 mph")).toBeInTheDocument();
    expect(getByText("Wind direction: s")).toBeInTheDocument();
  });
});
