import React from "react";
import Tab from "./Tab";
import { useState } from "react";

const Tabs = ({ tabs, activeClass }) => {
  const [active, setActive] = useState(tabs[0].id ?? 0);
  return (
    <div className="overfow-clip flex w-full overflow-x-auto">
      {tabs.map((tab, index) => (
        <Tab
          {...tab}
          id={index}
          active={active}
          setActive={setActive}
          activeClass={activeClass}
        />
      ))}
    </div>
  );
};

export default Tabs;
