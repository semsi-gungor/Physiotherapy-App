"use client";

import { Poppins } from "next/font/google";
import { FC, useRef } from "react";
import FamiliarItem from "./FamiliarItem";
import { useInView } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const items = [
  "Sırt, bel, boyun, omuz ve eklem ağrıları.",
  "Bel ve boyun fıtığı.",
  "Sinir sıkışması, uyuşma ve karıncalanmalar.",
  "Eklem hareketlerinde kısıtlamalar.",
  "Duruş bozuklukları.",
  "Bel ve boyun fıtığı.",
  "Menisküs, romatizma.",
  "Stres, endişe, uykuzusluk ve depresyon.",
  "Bel ve boyun fıtığı.",
  "Hipertansiyon ve kalp hastalıkları.",
  "Sıklıklıkla idrar yolu enfeksiyonları ve idrara çıkma.",
  "Kanser sonrası fiziksel olarak dayanıksız hissetme.",
];

const Familiar: FC = ({}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      ref={ref}
      className="w-full h-screen flex flex-col gap-16 items-center justify-center"
    >
      <h2 className="text-3xl font-bold text-[var(--color-6)] md:text-5xl">
        Kulağa tanıdık geliyor mu?
      </h2>
      <div></div>
      <ul
        className={` grid grid-cols-2 px-8 gap-8 max-w-3xl ${poppins.className} md:grid-cols-3`}
      >
        {items.map((item, index) => {
          return (
            <FamiliarItem
              key={index}
              id={index}
              item={item}
              active={isInView}
            />
          );
        })}
      </ul>
    </div>
  );
};
//
export default Familiar;
