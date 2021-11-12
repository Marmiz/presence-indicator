import React from "react";
import { ActiveUser, Visibility } from "./App";
import Avatar from "./components/Avatar";
import { POSITIONING } from "./hooks/useOnScreen";
import "./Presence.css";

type Props = {
  activeUsers: ActiveUser[];
  visibilityList: Visibility;
  position: POSITIONING;
};

const Presence = ({ activeUsers, visibilityList, position: type }: Props) => {
  const offScreen = Object.entries(visibilityList).reduce<string[]>(
    (acc, [k, v]) => (v === type ? [...acc, k] : [...acc]),
    []
  );

  const offscreenUsers = activeUsers.filter(({ activeOn }) =>
    offScreen.includes(activeOn)
  );

  return (
    <div
      className={`Presence ${
        type === POSITIONING.TOP ? "PresenceTop" : "PresenceBottom"
      }`}
    >
      {offscreenUsers.map((u) => (
        <Avatar key={u.id} name={u.id} position={type} />
      ))}
    </div>
  );
};

export default Presence;
