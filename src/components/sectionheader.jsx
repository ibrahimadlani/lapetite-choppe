import React from "react";

const SectionHeader = ({ label }) => {
  return (
    <div className="border-y-[1.5px] border-slate-900 py-[3px] mt-5">
      <div className="border-y border-slate-900 p-1">
        <h2 className="text-center font-bold josefin tracking-[5px]">
          <Dot />
          {label.toUpperCase()}
          <Dot />
        </h2>
      </div>
    </div>
  );
};

const Dot = () => <span className="text-red-700 mx-3">·</span>;

export default SectionHeader;
