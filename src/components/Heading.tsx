import React, { ReactNode } from "react";
import "./Heading.css";

type Props = {
  children: ReactNode;
};

const Heading = ({ children }: Props) => (
  <h2 className="Heading">{children}</h2>
);

export default Heading;
