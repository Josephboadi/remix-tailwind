import React from "react";

const Footer = () => {
  return (
    <div className="px-4 flex items-center">
      <p className="text-[rgba(0,0,0,0.5)]">Copyright © {new Date().getFullYear()} CalBank All rights reserved.</p>
    </div>
  );
};

export default Footer;
