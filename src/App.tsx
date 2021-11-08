import React, { createRef } from "react";
import PageElement, { Variants } from "./PageElement";
import Presence from "./Presence";
import useOnScreen from "./hooks/useOnScreen";
import "./App.css";

export type ActiveUser = {
  id: string;
  activeOn: string;
};

/**
 * step 0. - have a list of ref to the element we need to watch
 * step 1. - determine what is in view
 * step 2. - add avatar to element in view
 */

const list = ["batman", "superman", "ironman", "drstrange"];
const users: ActiveUser[] = [
  { id: "NN", activeOn: "drstrange" },
  { id: "ZZ", activeOn: "batman" },
  { id: "BB", activeOn: "batman" },
];
function App() {
  // We have our list of div that we need to watch.
  const listRefs = React.useMemo(
    () => list.map(() => React.createRef<HTMLDivElement>()),
    []
  );
  const [visible, setVisible] = React.useState({});

  const visibilityCb = React.useCallback(
    (name, visibility) => {
      setVisible((prevState) => ({
        ...prevState,
        [name]: visibility,
      }));
    },
    [setVisible]
  );

  // We need a way to tell what element is in view.
  return (
    <div className="App">
      <PageElement
        heading="Title"
        text="What's the document called"
        divRef={listRefs[0]}
        id={list[0]}
        activeUsers={users}
        onVisibilityChange={visibilityCb}
      />
      <PageElement
        heading="Date"
        text="When doest the event happen"
        divRef={listRefs[1]}
        id={list[1]}
        activeUsers={users}
        onVisibilityChange={visibilityCb}
      />
      <PageElement
        heading="Description"
        text="Lorem ipsum dolor sit amet"
        variants={Variants.Textarea}
        divRef={listRefs[2]}
        id={list[2]}
        activeUsers={users}
        onVisibilityChange={visibilityCb}
      />
      <PageElement
        heading="Consectetur"
        text="Lorem ipsum dolor sit amet"
        variants={Variants.Textarea}
        divRef={listRefs[3]}
        id={list[3]}
        activeUsers={users}
        onVisibilityChange={visibilityCb}
      />
      <div style={{ height: "300vh" }} />
      <div data-id="presence-parking">
        <Presence activeUsers={users} />
      </div>
    </div>
  );
}

export default App;
