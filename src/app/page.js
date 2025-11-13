import Timer from "@/components/Timer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      {/* Fon vektorlar */}
      <div className="absolute w-[300px] sm:w-[400px] md:w-[500px] h-[500px] sm:h-[600px] rotate-100 top-[-50px] left-[-80px] opacity-20">
        <Image src="/vector.png" alt="" fill className="object-contain" />
      </div>
      <div className="absolute w-[300px] sm:w-[400px] md:w-[500px] h-[500px] sm:h-[600px] rotate-10 top-[-50px] right-[-80px] opacity-20">
        <Image src="/vector.png" alt="" fill className="object-contain" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-10 py-10 z-10">
        {/* Yuqori info */}
        <div className="flex justify-center items-center gap-3 text-xl font-bold border border-black text-black rounded-xl py-3 px-6 w-fit mx-auto mb-8 bg-white/80 ">
          <div className="sm:border-r md:block hidden border-gray-400 sm:pr-4">
            Master klass
          </div>
          <div className="sm:border-r border-gray-400 sm:px-4">08:00</div>
          <div className="sm:pl-4">28.11.2025</div>
        </div>

        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-10">
          METODIKA MUALLIFLARI
        </h1>

        {/* Mualliflar va markaz */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Chapdagi muallif */}
          <article className="w-full sm:w-[400px] md:w-[450px]">
            <div className="w-full aspect-square relative">
              <Image
                src="/sardor.png"
                alt="Sardorbek Isroilov rasmi"
                fill
                className="object-cover rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="text-center py-3 rounded-xl bg-white text-black shadow-lg">
              <h2 className="text-xl font-bold">SARDORBEK ISROILOV</h2>
              <p className="text-sm">
                Tabiiy sog‘lomlashtirish yo‘nalishidagi mutaxassis
              </p>
            </div>
            <ul className="text-sm sm:text-base text-gray-700 space-y-2 list-disc pl-6 pt-5">
              <li>Xalqaro sertifikat sohibi</li>
              <li>Jamoat salomatligi bo‘yicha mutaxassis</li>
              <li>Ko‘p yillik amaliy tajriba</li>
              <li>Metodika muallifi</li>
            </ul>
          </article>

          {/* Markazdagi soat va link */}
          <div className="text-black flex-col items-center justify-center text-center h-[400px] mx-auto hidden md:flex">
            <Timer />
            <Link
              href="/"
              className="mt-8 py-3 px-3 text-white font-semibold bg-blue-500 hover:bg-blue-700 transition-all duration-200 rounded-full shadow-md"
            >
              Telegram kanalga o‘tish
            </Link>
          </div>

          <div className="fixed md:hidden z-50 bottom-28 left-1/2 rounded-full p-2 -translate-x-1/2 w-[90%] mx-auto flex items-center justify-center text-center">
            <Link
              href="/"
              className="mt-8 py-3 px-3 text-white font-semibold bg-blue-500 hover:bg-blue-700 transition-all duration-200 rounded-full shadow-md w-full mx-auto"
            >
              Telegram kanalga o‘tish
            </Link>
          </div>
          <div className="fixed md:hidden z-50 bottom-10 left-1/2 rounded-full p-2 -translate-x-1/2 w-[90%] h-[70px] bg-blue-500 flex items-center justify-center">
            <Timer />
          </div>

          {/* O‘ngdagi muallif */}
          <article className="w-full sm:w-[400px] md:w-[450px]">
            <div className="w-full aspect-square relative">
              <Image
                src="/ustoz.png"
                alt="Doktor Mahmudov rasmi"
                fill
                className="object-cover rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="text-center py-3 rounded-xl bg-white text-black shadow-lg">
              <h2 className="text-xl font-bold">DOKTOR MAHMUDOV</h2>
              <p className="text-sm">Shifokor</p>
            </div>
            <ul className="text-sm sm:text-base text-gray-700 space-y-2 list-disc pl-6 pt-5">
              <li>Pulmonolog (nafas tizimi mutaxassisi)</li>
              <li>
                15 yillik an’anaviy va 12 yillik alternativ tibbiyot tajribasi
              </li>
              <li>
                AQSH, Chernogoriya, Ukraina, Belorussiya va Rossiyada tajriba
                almashgan
              </li>
              <li>
                “Xalq tabobati fidoyisi” ko‘krak nishoni bilan taqdirlangan
              </li>
              <li>
                Hijoma va tabiiy muolajalar bo‘yicha ko‘plab shogirdlar
                tayyorlagan
              </li>
            </ul>
            <p className="text-sm sm:text-base text-gray-700 pt-4 px-4">
              Doktor Makhmudov — o‘z faoliyatida an’anaviy tibbiyot va tabiiy
              muolajani uyg‘unlashtirgan mutaxassis.
            </p>
          </article>
        </div>

        {/* Quyidagi matn */}
        <p className="mt-10 text-sm sm:text-base text-gray-700 leading-relaxed max-w-5xl mx-auto px-4">
          <strong>TiniqNafas metodikasi</strong> — bu tananing o‘zini tabiiy
          yo‘l bilan tiklash tizimi. Ushbu metodikani sinab ko‘rgan insonlar
          aytishmoqda: “Yillar davomida spreyga o‘rganib qolgan edim. Endi sprey
          ishlatmayapman.” “Operatsiya qilishadi deyishgan edi, endi hech qanday
          dori yoki tomchisiz nafas olyapman.” “Men kutgan natijadan ham yaxshi
          bo‘ldi — butun vujudim yengillashdi.” Bu natijalar tananing o‘zini
          tuzatish mexanizmi qayta ishga tushganining belgisi. — Sprey va
          tomchilarga bo‘lgan qaramlikdan chiqishmoqda — Operatsiyasiz, dorisiz,
          tabiiy yo‘l bilan nafas olayapti — Uyqu sifati va energiya tiklanmoqda
          — Hayot sifati o‘zgarib boryapti.
        </p>
      </section>
    </div>
  );
}
