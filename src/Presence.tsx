import React from "react";
import { ActiveUser, Visibility } from "./App";
import Avatar from "./components/Avatar";
import "./Presence.css";

type Props = {
  activeUsers: ActiveUser[];
  visibilityList: Visibility;
};

const Presence = ({ activeUsers, visibilityList }: Props) => {
  const offScreen = Object.entries(visibilityList).reduce<string[]>(
    (acc, [k, v]) => (!v ? [...acc, k] : [...acc]),
    []
  );

  const offscreenUsers = activeUsers.filter(({ activeOn }) =>
    offScreen.includes(activeOn)
  );

  return (
    <div className="Presence">
      {offscreenUsers.map((u) => (
        <Avatar key={u.id} name={u.id} />
      ))}
    </div>
  );
};

export default Presence;
