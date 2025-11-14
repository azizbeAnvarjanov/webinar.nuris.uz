"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";
import Instructors from "@/components/Instructors";

import {
  Stethoscope,
  HeartPulse,
  Activity,
  ArrowRightCircle,
  Pill,
  Brain,
  Wind,
} from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.12 },
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
  const [timeLeft, setTimeLeft] = useState(111);

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

  const cards = [
    {
      order: "01",
      icon: <Wind size={26} className="text-sky-600" />,
      question: "Burun bitishining asl sababi",
      answer:
        "Asosiy muammo ko‘pincha asab tarangligi, qon aylanishi va limfa turg‘unligida bo‘ladi.",
    },
    {
      order: "02",
      icon: <Pill size={26} className="text-red-500" />,
      question: "Nega doridan keyin qaytadi?",
      answer:
        "Tomchi yo‘lni ochadi, lekin ichki shish va yallig‘lanish qoladi shu sabab qayta bitadi.",
    },
    {
      order: "03",
      icon: <HeartPulse size={26} className="text-pink-600" />,
      question: "3 daqiqalik tabiiy mashqlar",
      answer: "Uyda bajariladigan, xavfsiz mashqlar nafasni tez ochadi.",
    },
    {
      order: "04",
      icon: <Brain size={26} className="text-purple-600" />,
      question: "Tana va asab tizimi uyg‘unligi",
      answer:
        "Nafas ochilishi fikr, hissiyot va asab tizimiga bevosita bog‘liq.",
    },
    {
      order: "05",
      icon: <Activity size={26} className="text-green-600" />,
      question: "Erkin nafasga yetish usullari",
      answer:
        "Kundalik sodda odatlar orqali burun doim ochiq va nafas yengil bo‘ladi.",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <motion.div
        className="w-full max-w-lg bg-white px-3 py-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* TOP */}
        <motion.div
          variants={itemUp}
          className="flex items-center justify-between mb-6"
        >
          <span className="text-sm text-gray-700 font-bold">28-Noyabr</span>

          <div className="flex items-center gap-2 bg-sky-600 text-white px-4 py-2 rounded-xl shadow-md">
            <Stethoscope size={18} />
            <span className="text-md font-bold">Master klass</span>
          </div>

          <div className="text-sm text-gray-700 font-semibold">20:00</div>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={itemUp}
          className="text-center text-3xl font-extrabold mb-3 leading-snug"
        >
          <span className="text-gray-800">BURUN BITISHIDAN </span>
          <span className="text-sky-600">TABIIY YO‘L </span>
          <span className="text-gray-800">BILAN QUTULING</span>
        </motion.h2>

        <motion.div
          variants={itemUp}
          className="text-center text-black mb-3 bg-sky-50 p-3 rounded-lg border border-sky-200"
        >
          Hech qanday kimyoviy dori yoki operatsiyasiz tabiiy tiklanish orqali.
        </motion.div>

        <motion.div variants={itemUp} className="text-center text-black mb-5">
          TiniqNafas — NURIS loyihasining tabiiy nafasni tiklashga
          ixtisoslashgan yo‘nalishi
        </motion.div>

        <LinkButton />

        {/* Countdown */}
        <motion.div
          variants={itemUp}
          className="flex justify-center my-4 text-sky-600"
        >
          <div className="text-5xl font-extrabold tracking-tight drop-shadow-sm text-red-600">
            0{mmss(timeLeft)}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.h2
          variants={itemUp}
          className="text-center text-2xl font-extrabold mb-4 text-gray-800"
        >
          MASTERKLASSDA SIZ:
        </motion.h2>

        {/* CARD LIST */}
        {cards.map((card, i) => (
          <motion.div
            key={i}
            variants={itemUp}
            className="text-black mb-4 flex gap-4 shadow-lg border border-sky-300 rounded-xl p-4 bg-gradient-to-r from-white to-sky-50"
          >
            {/* Number */}
            <div className="min-w-[60px] min-h-[60px] bg-sky-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              {card.order}
            </div>

            {/* Text */}
            <div className="flex flex-col">
              <span className="text-gray-900 font-bold flex items-center gap-2">
                {card.icon}
                {card.question}
              </span>
              <span className="text-sm text-gray-700">{card.answer}</span>
            </div>
          </motion.div>
        ))}

        {/* Fixed Countdown */}
        <div className="fixed w-[50%] bottom-22 left-1/2 -translate-x-1/2 z-50 bg-red-600 h-[50px] flex items-center justify-center text-3xl font-bold rounded-full shadow-2xl text-white animate-pulse">
          0{mmss(timeLeft)}
        </div>

        {/* Fixed CTA */}
        <motion.div
          variants={itemUp}
          className="fixed bottom-5 w-[90%] left-1/2 -translate-x-1/2 z-50"
        >
          <LinkButton />
        </motion.div>

        {/* Instructors section (already beautiful) */}
        <Instructors />
      </motion.div>
    </div>
  );
}
