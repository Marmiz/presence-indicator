import React from "react";
import { render, screen } from "@testing-library/react";
import PageElement from "./PageElement";
import { ActiveUser } from "./App";

const onVisibilityChange = jest.fn();
const activeUsers: ActiveUser[] = [
  { id: "foo", activeOn: "test1" },
  { id: "bar", activeOn: "test2" },
];
const divRef = React.createRef<HTMLDivElement>();

let mockIntersectionObserver = jest.fn();

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  mockIntersectionObserver.mockReturnValue({
    observe: () => 2,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

it("renders heading and text", () => {
  render(
    <PageElement
      heading="Test"
      text="Lorem Ipsum"
      id="test1"
      activeUsers={activeUsers}
      divRef={divRef}
      onVisibilityChange={onVisibilityChange}
    />
  );

  const h = screen.getByText(/test/i);
  const t = screen.getByText(/lorem ipsum/i);
  expect(h).toBeInTheDocument();
  expect(t).toBeInTheDocument();
});
