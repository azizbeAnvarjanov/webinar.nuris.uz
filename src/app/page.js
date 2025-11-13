// PromoCard.jsx
"use client"; // agar Next.js app routerda bo'lsa
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";

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
        className="w-full max-w-lg bg-white px-3 py-6"
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

        {/* Portrait card */}
        <motion.div variants={itemUp} className="flex justify-center -mt-2">
          <div className="w-[350px] h-[350px] rounded-xl overflow-hidden relative bg-white">
            {/* Rasmni public papkadan chaqiring */}
            <Image
              src="/ustoz.png"
              alt="Instructor"
              fill
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Big CTA */}
        <motion.div variants={itemUp} className="mb-5">
          <div className="w-full bg-gradient-to-b from-red-500 to-red-600 text-white py-4 rounded-xl text-lg font-bold shadow-lg transform active:scale-98 flex items-center justify-center flex-col">
            DOKTOR MAHMUDOV
            <span className="text-sm font-medium">Shifokor</span>
          </div>
        </motion.div>
        <motion.div variants={itemUp} className="mb-5">
          <ul className="list-decimal pl-8 text-black">
            <li>Shifokor</li>
            <li>Pulmonolog (nafas tizimi mutaxassisi)</li>
            <li>
              15 yillik an’anaviy tibbiyot, 12 yillik alternativ tibbiyot
              tajribasi{" "}
            </li>
            <li>
              AQSH (Amerika Qo‘shma Shtatlari), Chernogoriya, Ukraina,
              Belorussiya va Rossiya davlatlarida tajriba almashgan
            </li>
            <li>
              “Xalq tabobati fidoyisi” ko‘krak nishoni bilan taqdirlangan{" "}
            </li>
            <li>
              Hijoma va tabiiy muolajalar bo‘yicha ko&apos;plab shogirdlar
              tayyorlagan{" "}
            </li>
          </ul>
        </motion.div>

        <motion.div variants={itemUp} className="text-black mb-4">
          Doktor Makhmudov — o‘z faoliyatida an’anaviy tibbiyot va tabiiy
          muolajani uyg‘unlashtirgan mutaxassis.
        </motion.div>
        <motion.h2
          variants={itemUp}
          className="text-center text-2xl font-extrabold mb-4"
        >
          <span className="text-gray-800">NATIJALAR HAQIDA:</span>
        </motion.h2>
        <motion.div variants={itemUp} className="text-black mb-4">
          TiniqNafas metodikasi — bu tananing o‘zini tabiiy yo‘l bilan tiklash
          tizimi.
        </motion.div>
        <motion.div variants={itemUp} className="text-black mb-4">
          Ushbu metodikani sinab ko‘rgan insonlar aytishmoqda:
        </motion.div>
        <motion.div variants={itemUp} className="mb-5">
          <ul className="list-decimal pl-8 text-black">
            <li>
              “Yillar davomida spreyga o‘rganib qolgan edim. Endi sprey
              ishlatmayapman.”{" "}
            </li>
            <li>
              “Operatsiya qilishadi deyishgan edi. Endi hech qanday dori yoki
              tomchisiz nafas olyapman.”{" "}
            </li>
            <li>
              “Men kutgan natijadan ham yaxshi bo‘ldi. Faqat burun ochilmadi —
              butun vujudim yengillashdi.”
            </li>
          </ul>
        </motion.div>
        <motion.div variants={itemUp} className="text-black mb-4">
          Bu natijalar shunchaki vaqtinchalik emas.
        </motion.div>
        <motion.div variants={itemUp} className="text-black mb-4">
          Bu — tananing o‘zini tuzatish mexanizmi qayta ishga tushganining
          belgisi.
        </motion.div>

        <motion.div variants={itemUp} className="mb-25">
          <ul className="list-decimal pl-8 text-black">
            <li>Sprey va tomchilarga bo‘lgan qaramlikdan chiqishmoqda </li>
            <li>Operatsiyasiz, dorisiz, tabiiy yo‘l bilan nafas olayapti </li>
            <li>Uyqu sifati va energiya tiklanmoqda </li>
            <li>Hayot sifati o‘zgarib boryapti</li>
          </ul>
        </motion.div>

        <motion.div
          variants={itemUp}
          className="fixed bottom-25 w-[90%] left-[50%] translate-x-[-50%] z-50"
        >
          ssss
        </motion.div>
        <motion.div
          variants={itemUp}
          className="fixed bottom-5 w-[90%] left-[50%] translate-x-[-50%] z-50"
        >
          <LinkButton />
        </motion.div>
      </motion.div>
    </div>
  );
}
