import React from "react";
import { render, screen } from "@testing-library/react";
import Presence from "./Presence";
import { ActiveUser, Visibility } from "./App";
import { POSITIONING } from "./hooks/useOnScreen";

const activeUsers: ActiveUser[] = [
  { id: "foo", activeOn: "test1" },
  { id: "bar", activeOn: "test2" },
];

const visibilityList: Visibility = {
  test1: POSITIONING.BOTTOM,
  test2: POSITIONING.TOP,
};

it("renders avatars when the elements are offscreen BOTTOM", () => {
  render(
    <Presence
      activeUsers={activeUsers}
      visibilityList={visibilityList}
      position={POSITIONING.BOTTOM}
    />
  );

  const avatar = screen.getByText("foo");
  expect(avatar).toBeInTheDocument();
});

it("renders avatars when the elements are offscreen TOP", () => {
  render(
    <Presence
      activeUsers={activeUsers}
      visibilityList={visibilityList}
      position={POSITIONING.TOP}
    />
  );

  const avatar = screen.getByText("bar");
  expect(avatar).toBeInTheDocument();
});
