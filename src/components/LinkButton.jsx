import React from "react";

const LinkButton = () => {
  return (
    <button className="w-full bg-gradient-to-b from-red-500 to-red-600 text-white py-4 rounded-xl text-lg font-bold shadow-lg transform active:scale-98">
      BEPUL QATNASHISH
      <span className="ml-2 inline-block bg-white text-red-600 rounded-full w-7 h-7 flex items-center justify-center font-bold">
        ›
      </span>
    </button>
  );
};

export default LinkButton;
