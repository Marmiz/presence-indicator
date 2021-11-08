import React, { ReactNode } from "react";
import "./Box.css";

type Props = {
  children: ReactNode;
  id?: string;
};

type Ref = HTMLDivElement;

const Box = React.forwardRef<Ref, Props>(({ children, id }, ref) => (
  <div className="Box" ref={ref} data-id={id}>
    {children}
  </div>
));

export default Box;
