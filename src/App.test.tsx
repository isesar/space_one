import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event"; // for simulating user interactions
import App from "./App";
describe("Testing main page", () => {
  it("shows title", () => {
    render(<App />);
    const title = screen.getByRole("heading", { name: "Product List" });
    expect(title).toBeTruthy();
  });
  it("shows more", async () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Show All" });
    const itemA = screen.getByText("Item A");
    const tryFindItemF = screen.queryByText("Item F");

    expect(itemA).toBeTruthy();
    expect(button).toBeTruthy();
    expect(tryFindItemF).toBeFalsy();

    userEvent.click(button);

    await waitFor(() => {
      const itemF = screen.getByText("Item F");
      expect(itemF).toBeTruthy();
    });
  });
});
