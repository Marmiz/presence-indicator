import React from "react";
import "./Avatar.css";
type Props = {
  name: string;
};

const Avatar = ({ name }: Props) => <div className="Avatar">{name}</div>;

export default Avatar;
