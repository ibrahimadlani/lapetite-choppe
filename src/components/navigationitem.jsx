import React from "react";

const NavigationItem = ({ label, href }) => {
  return (
    <a
      href={href}
      className="flex items-center text-sm font-bold text-zinc-900 josefin tracking-[5px]"
    >
      <Dot />
      {label.toUpperCase()}
      <Dot />
    </a>
  );
};

const Dot = () => <span className="text-red-700 mx-3">·</span>;

export default NavigationItem;
