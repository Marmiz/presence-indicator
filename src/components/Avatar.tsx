import React from "react";
import { motion } from "framer-motion";
import "./Avatar.css";
type Props = {
  name: string;
};

const Avatar = ({ name }: Props) => (
  <motion.div className="Avatar" layoutId={name}>
    {name}
  </motion.div>
);

export default Avatar;
