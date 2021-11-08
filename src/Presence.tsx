import React from "react";
import { ActiveUser } from "./App";

type Props = {
  activeUsers: ActiveUser[];
};

const Presence = ({ activeUsers }: Props) => {
  return (
    <>
      {activeUsers.map((u) => (
        <div key={u.id}>{u.id}</div>
      ))}
    </>
  );
};

export default Presence;
