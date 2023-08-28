import React, { useState } from "react";

export const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);
  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };
  return (
    <div>
      <div className=" rounded-lg px-1 bg-white  " style={{ height: 34 }}>
        <div className="h-6 mt-1  flex items-center relative">
          {data.map((tab, index) => (
            <span
              key={index}
              className={`h-full cursor-pointer  mt-2 justify-center items-center 
              ${selectedTab == index ? " text-white" : ""}`}
              onClick={() => activeTab(tab, index)}
              style={{ zIndex: selectedTab === index ? 1 : 0, width: 100 }}
            >
              {tab}
            </span>
          ))}
          <span
            className="bg-gradient-to-r from-amber-300 to-red-600 text-black  absolute transition-all cubic-bezier[0.88, -0.35, 0.565, 1.35] duration-500 rounded-lg mt-2"
            style={{ left, height: 30, width: 100 }}
          >
            {/* // {data[left / 100]} */}
          </span>
        </div>
      </div>
    </div>
  );
};
