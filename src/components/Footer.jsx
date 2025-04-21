import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0c2a] text-white border-t border-white/10 py-6 px-4">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="text-sm text-center text-gray-400">
          &copy; {year} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
