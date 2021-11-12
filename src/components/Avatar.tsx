import React from "react";
import { motion } from "framer-motion";
import "./Avatar.css";
import { POSITIONING } from "../hooks/useOnScreen";
type Props = {
  name: string;
  position: POSITIONING;
};

const Avatar = ({ name, position }: Props) => {
  const arrowPosition =
    position === POSITIONING.VISIBLE
      ? "Hidden"
      : position === POSITIONING.BOTTOM
      ? "Bottom"
      : "Top";
  return (
    <motion.div className="Avatar" layoutId={name}>
      <i className={`Arrow ${arrowPosition}`} />
      {name}
    </motion.div>
  );
};

export default Avatar;
