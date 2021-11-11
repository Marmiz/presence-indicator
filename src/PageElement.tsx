import React, { useEffect } from "react";
import Box from "./components/Box";
import Heading from "./components/Heading";
import Text from "./components/Text";
import Textarea from "./components/Textarea";
import Input from "./components/Input";
import { ActiveUser } from "./App";
import useOnScreen from "./hooks/useOnScreen";
import Avatar from "./components/Avatar";

export enum Variants {
  Textarea,
}

type Props = {
  heading: string;
  text: string;
  id: string;
  divRef: React.RefObject<HTMLDivElement>;
  variants?: Variants;
  activeUsers: ActiveUser[];
  onVisibilityChange: (...args: any) => void;
};

const PageElement = ({
  heading,
  text,
  variants,
  divRef,
  id,
  activeUsers,
  onVisibilityChange,
}: Props) => {
  const isVisible = useOnScreen<HTMLDivElement>(divRef);

  useEffect(() => {
    onVisibilityChange(id, isVisible);
  }, [id, isVisible, onVisibilityChange]);

  return (
    <Box ref={divRef} id={id}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Heading>{heading}</Heading>
        {isVisible
          ? activeUsers
              .filter((u) => u.activeOn === id)
              .map((el) => <Avatar key={el.id} name={el.id} />)
          : null}
      </div>
      <Text>{text}</Text>
      {variants === Variants.Textarea ? <Textarea /> : <Input />}
    </Box>
  );
};

export default PageElement;
