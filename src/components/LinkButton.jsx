import React from "react";

const LinkButton = () => {
  return (
    <button className="relative overflow-hidden w-full bg-gradient-to-b from-red-500 to-red-600 text-white py-4 rounded-xl text-lg font-bold shadow-lg transform active:scale-98 animate-[pulseScale_1.4s_ease_infinite]">
      BEPUL QATNASHISH
      <span className="ml-2 inline-block bg-white text-red-600 rounded-full w-7 h-7 flex items-center justify-center font-bold animate-[iconBounce_1s_infinite]">
        ›
      </span>
      {/* Shine Effekt */}
      <span className="absolute inset-0 w-full h-full -left-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shine_1.2s_linear_infinite]"></span>
      <style>
        {`
          @keyframes shine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(150%); }
          }

          /* Opacity o‘zgarmaydigan pulsatsiya */
          @keyframes pulseScale {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          /* Icon uchun yumshoq bounce */
          @keyframes iconBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }
        `}
      </style>
    </button>
  );
};

export default LinkButton;
