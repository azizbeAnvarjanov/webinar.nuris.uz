// PromoCard.jsx
"use client"; // agar Next.js app routerda bo'lsa
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function PromoCard() {
  const [timeLeft, setTimeLeft] = useState(111); // boshlang'ich soniya (misol)
  // Agar real vaqtdagi sanani ishlatmoqchi bo'lsangiz, target vaqt kiriting va diff hisoblang.

  useEffect(() => {
    const t = setInterval(() => {
      setTimeLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const mmss = (sec) => {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(1, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="min-h-screen bg-white flex  justify-center">
      <motion.div
        className="w-full max-w-lg bg-white px-6 py-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Top tag + date/time row */}
        <motion.div
          variants={itemUp}
          className="flex items-center justify-between mb-4"
        >
          <span className="text-sm text-gray-700 font-bold">28-Noyabr</span>
          <button className=" bg-gradient-to-b from-red-500 to-red-600 text-white py-2 px-4 rounded-xl text-lg font-bold shadow-lg transform active:scale-98">
            Master klass
          </button>
          <div className="text-sm text-gray-700 font-semibold">20:00</div>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={itemUp}
          className="text-center text-2xl font-extrabold mb-4"
        >
          <span className="text-gray-800">BURUN BITISHIDAN </span>
          <span className="text-red-600">TABIIY YOL </span>
          <span className="text-gray-800">BILAN QUTULING</span>
        </motion.h2>

        {/* Portrait card */}
        <motion.div variants={itemUp} className="flex justify-center -mt-2">
          <div className="w-[350px] h-[350px] rounded-xl overflow-hidden relative bg-white">
            {/* Rasmni public papkadan chaqiring */}
            <Image
              src="/sardor.png"
              alt="Instructor"
              fill
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Big CTA */}
        <motion.div variants={itemUp} className="mb-5">
          <div className="w-full bg-gradient-to-b from-red-500 to-red-600 text-white py-4 rounded-xl text-lg font-bold shadow-lg transform active:scale-98 flex items-center justify-center flex-col">
            SARDORBEK ISROILOV
            <span className="text-sm font-medium">
              Tabiiy sog‘lomlashtirish yo‘nalishidagi mutaxassis
            </span>
          </div>
        </motion.div>
        <motion.div variants={itemUp} className="mb-5">
          <ul className="list-decimal pl-8 text-black">
            <li>Xalqaro sertifikat sohibi</li>
            <li>O‘zbekiston Hijoma Tabobati Akademiyasi a’zosi </li>
            <li>Janubiy Koreyada tahsil olgan </li>
            <li>50+ shifokor, tabib va professorlardan saboq olgan </li>
            <li>3 ta sog‘lomlashtirish markazi asoschisi </li>
            <li>3 yillik amaliy tajribaga ega professional hajjom va tabib </li>
          </ul>
        </motion.div>

        {/* Countdown */}
        <motion.div
          variants={itemUp}
          className="flex justify-center mb-4 text-red-500"
        >
          <div className="text-5xl font-extrabold tracking-tight">
            0{mmss(timeLeft)}
          </div>
        </motion.div>
        {/* Countdown */}
        <motion.div
          variants={itemUp}
          className="flex justify-center mb-4 text-red-500"
        >
          <div className="text-sm text-black">
            Hech qanday kimyoviy dori yoki operatsiyasiz — tabiiy tiklanish
            orqali. TiniqNafas — NURIS loyihasining tabiiy nafasni tiklashga
            ixtisoslashgan yo‘nalishi
          </div>
        </motion.div>

        <motion.h2
          variants={itemUp}
          className="text-center text-2xl font-extrabold mb-4"
        >
          <span className="text-gray-800">MASTERKLASSDA SIZ:</span>
        </motion.h2>
        {/* Gift card */}
        <motion.div
          variants={itemUp}
          className="border-2 border-red-200 rounded-xl p-3 flex gap-3 items-center"
        >
          <div className="w-16 h-16 relative rounded-md flex-shrink-0 overflow-hidden flex items-center justify-center bg-red-500">
            {/* oddiy SVG yoki rasm joyi */}
            <Image
              src="/gift-icon.png"
              alt="Gift"
              fill
              className="w-full h-full object-contain"
              onError={(e) => {
                // agar rasm yo'q bo'lsa, oddiy box ko'rsatish
                e.currentTarget.style.display = "none";
              }}
            />
            {/* Agar gift-icon.png bo'lmasa, fallback */}
            <div className="w-full h-full flex items-center justify-center text-3xl text-white font-bold">
              01
            </div>
          </div>

          <div className="text-black">
            <div className="font-bold text-sm">
              Har kuni bitadigan burunning asl sababini bilib olasiz
            </div>
            <div className="text-sm text-gray-700">
              Ko‘pchilik o‘ylaydi “shunchaki shamollash”, “allergiya”, “burun
              suyagi egri”. Aslida esa muammo chuqurda — asab, qon aylanishi va
              limfa tizimidagi turg‘unlikda. Siz aynan o‘sha ildiz sababni
              topasiz.
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
