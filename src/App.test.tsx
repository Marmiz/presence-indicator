import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

it("renders hard-coded elements", () => {
  render(<App />);
  const date = screen.getByText(/date/i);
  const test = screen.getByText(/title/i);
  const description = screen.getByText(/description/i);
  const lorem = screen.getByText(/consectetur/i);
  expect(date).toBeInTheDocument();
  expect(test).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(lorem).toBeInTheDocument();
});

it("render at least one spacing element", () => {
  render(<App />);
  const spacing = screen.getAllByText(/scroll/i);
  expect(spacing.length).toBeGreaterThanOrEqual(1);
});
