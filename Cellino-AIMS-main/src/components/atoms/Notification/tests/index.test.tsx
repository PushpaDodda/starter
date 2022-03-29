import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { NotificationIcon } from "..";

describe("Notification test cases", () => {
  test("render Notification", () => {
    render(<NotificationIcon />);
    expect(screen.getByTestId("badge")).toBeInTheDocument();
  });
});
