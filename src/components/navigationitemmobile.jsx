import React from "react";

const NavigationItem = ({ label, href }) => {
  return (
    <div className="flow-root text-center">
      <a
        href={href}
        className="-m-2 p-2 block font-bold josefin tracking-[5px] text-slate-900"
      >
        <Dot />
        {label.toUpperCase()}
        <Dot />
      </a>
    </div>
  );
};

const Dot = () => <span className="text-red-700 mx-3">·</span>;

export default NavigationItem;
