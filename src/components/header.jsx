import React from "react";
import signature from "../static/images/signature.svg";

const Header = ({ desc }) => {
  return (
    <div className="flex flex-col my-9">
      <img src={signature} alt="" className="h-24" />
      <p className="crimson text-center text-sm">{desc}</p>
    </div>
  );
};

export default Header;
