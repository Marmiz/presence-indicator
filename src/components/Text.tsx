import React, { ReactNode } from "react";
import "./Text.css";

type Props = {
  children: ReactNode;
};

const Text = ({ children }: Props) => <p className="Text">{children}</p>;

export default Text;
