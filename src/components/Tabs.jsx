import { useEffect, useState } from "react";
import Tab from "./Tab";

const Tabs = ({ tabs = [], activeClass = '', onchange = (data) => { }, activeTab }) => {
  const [active, setActive] = useState(activeTab ?? tabs.find(tab => tab.href === location.href) ?? tabs[0]);
  useEffect(() => {
    onchange(active)
  }, [active])
  return (
    <div className="overfow-clip flex w-full overflow-x-auto">
      {tabs.map((tab, index) => (
        <Tab
          {...tab}
          key={index}
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
