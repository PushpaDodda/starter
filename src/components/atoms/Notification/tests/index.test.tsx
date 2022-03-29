import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import { NotificationIcon } from "..";

describe("Notification test case", () => {
  test("render Notification", () => {
    render(<NotificationIcon />);
    expect(screen.getByTestId("badge1")).toBeInTheDocument();
  });
});
