"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Stethoscope,
  HeartPulse,
  Activity,
  Microscope,
  CheckCircle2,
} from "lucide-react";

const itemUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Instructors() {
  return (
    <div className="px-3 py-10 bg-[url('/medical-pattern.png')] bg-cover bg-center">
      {/* Title */}
      <motion.h2
        variants={itemUp}
        className="text-center text-3xl font-extrabold mb-6 mt-4 text-sky-700"
      >
        <span className="pb-1">METODIKA MUALLIFLARI</span>
      </motion.h2>

      {/* CARD 1 */}
      <motion.div
        variants={itemUp}
        className="flex justify-center mb-4 drop-shadow-xl"
      >
        <div className="w-[350px] h-[350px] rounded-xl overflow-hidden relative border-4 border-sky-500 shadow-xl">
          <Image
            src="/ustoz.png"
            alt="Instructor"
            fill
            className="object-cover object-top"
          />
        </div>
      </motion.div>

      {/* Name + Badge */}
      <motion.div variants={itemUp} className="mb-5">
        <div className="w-full bg-gradient-to-r from-sky-600 to-sky-500 text-white py-4 rounded-xl text-lg font-extrabold shadow-xl flex items-center flex-col">
          DOKTOR MAHMUDOV
          <span className="text-sm opacity-90 font-medium flex items-center gap-1">
            <Stethoscope size={16} /> Shifokor
          </span>
        </div>
      </motion.div>

      {/* List with icons */}
      <motion.div variants={itemUp} className="mb-8">
        <ul className="space-y-3 text-black">
          {[
            "Shifokor",
            "Pulmonolog (nafas tizimi mutaxassisi)",
            "15 yillik an’anaviy tibbiyot, 12 yillik alternativ tibbiyot tajribasi",
            "AQSH, Chernogoriya, Ukraina, Belarus va Rossiyada tajriba almashgan",
            "“Xalq tabobati fidoyisi” ko‘krak nishoni sohibi",
            "Hijoma va tabiiy muolaja bo‘yicha ko‘plab shogirdlar tayyorlagan",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className=" min-w-[20px]">
                <CheckCircle2 className="text-teal-600 mt-1" size={20} />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        variants={itemUp}
        className="text-black mb-8 bg-sky-50 p-4 rounded-xl border-l-4 border-sky-500 shadow"
      >
        Doktor Makhmudov — o‘z faoliyatida an’anaviy tibbiyot va tabiiy
        muolajani uyg‘unlashtirgan mutaxassis.
      </motion.div>

      {/* CARD 2 */}
      <motion.div
        variants={itemUp}
        className="flex justify-center mb-4 drop-shadow-xl"
      >
        <div className="w-[350px] h-[350px] rounded-xl overflow-hidden relative border-4 border-teal-500 shadow-xl">
          <Image
            src="/sardor.png"
            alt="Instructor"
            fill
            className="object-cover object-top"
          />
        </div>
      </motion.div>

      {/* Name */}
      <motion.div variants={itemUp} className="mb-5">
        <div className="w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white py-4 rounded-xl text-lg font-extrabold shadow-xl flex items-center flex-col">
          SARDORBEK ISROILOV
          <span className="text-sm opacity-90 font-medium flex items-center gap-1">
            <Microscope size={16} /> Tabiiy sog‘lomlashtirish mutaxassisi
          </span>
        </div>
      </motion.div>

      {/* List */}
      <motion.div variants={itemUp} className="mb-8">
        <ul className="space-y-3 text-black">
          {[
            "Xalqaro sertifikat sohibi",
            "O‘zbekiston Hijoma Tabobati Akademiyasi a’zosi",
            "Janubiy Koreyada tahsil olgan",
            "50+ shifokor, tabib va professorlardan saboq olgan",
            "3 ta sog‘lomlashtirish markazi asoschisi",
            "3 yillik tajribaga ega professional hajjom",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle2 className="text-teal-700 mt-1" size={20} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* RESULT SECTION */}
      <motion.h2
        variants={itemUp}
        className="text-center text-2xl font-extrabold mb-4 text-sky-700 mt-10"
      >
        <span className=" pb-1">NATIJALAR HAQIDA</span>
      </motion.h2>

      <motion.div
        variants={itemUp}
        className="text-black mb-4 bg-white rounded-xl p-5 shadow border-l-4 border-sky-500 border"
      >
        TiniqNafas metodikasi — tananing o‘zini tabiiy yo‘l bilan tiklash
        tizimi.
      </motion.div>

      <motion.div
        variants={itemUp}
        className="text-black mb-4 bg-white rounded-xl p-5 shadow border-l-4 border-sky-500 border"
      >
        Ushbu metodikani sinab ko‘rgan insonlar aytishmoqda:
      </motion.div>

      {/* List of feedback */}
      <motion.div variants={itemUp} className="mb-8">
        <ul className="space-y-3 text-black">
          {[
            "“Yillar davomida spreyga o‘rganib qolgan edim. Endi sprey ishlatmayapman.”",
            "“Operatsiya qilishadi deyishgan edi. Endi dorisiz nafas olyapman.”",
            "“Men kutgan natijadan ham yaxshi bo‘ldi — butun vujudim yengillashdi.”",
          ].map((item, i) => (
            <li key={i} className="flex gap-2">
              <div className=" min-w-[20px]">
                <HeartPulse size={20} className="text-red-500 mt-1" />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Final list */}
      <motion.div variants={itemUp} className="mb-25">
        <ul className="space-y-3 text-black">
          {[
            "Sprey va tomchilarga qaramlikdan chiqishmoqda",
            "Operatsiyasiz, dorisiz, tabiiy yo‘l bilan nafas olayapti",
            "Uyqu sifati va energiya tiklanmoqda",
            "Hayot sifati o‘zgarib boryapti",
          ].map((item, i) => (
            <li key={i} className="flex gap-2">
              <div className=" min-w-[20px]">
                <Activity className="text-sky-600 mt-1" size={20} />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
