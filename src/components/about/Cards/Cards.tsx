import { FC } from "react";
import Image from "next/image";

const Cards: FC = ({}) => {
  return (
    <div className="w-full h-auto flex items-center justify-center pt-24 overflow-hidden">
      <div className="grid py-4 px-16 gap-8 grid-cols-1 grid-rows-9 w-full  md:grid-cols-3 md:grid-rows-3 md:w-[45rem] md:h-[40rem]  lg:grid-cols-3 lg:grid-rows-3 lg:w-[65rem] lg:h-[40rem] ">
        <div className="bg-neutral-800 row-span-1 rounded-lg flex flex-col justify-center p-4 gap-2">
          <h4 className="md:text-sm font-bold text-neutral-200">
            Kişiye Özel Program
          </h4>
          <p className="md:text-xs lg:text-sm text-neutral-300">
            Kişiye Özel Fizik Tedavi Programı Kişiye özel antrenman programı,
            kişiye özel klinik pilates ve arkadaşınızla ya da eşinizle birlikte
            düet pilates. Tedavi seanslarımız tamamen kişiye özel olarak
            planlanmaktadır.
          </p>
        </div>
        <div className="bg-white row-span-2 rounded-lg relative card md:auto ">
          <Image
            src="https://images.unsplash.com/photo-1633707236776-1188a396f223"
            alt=""
            fill
            objectFit="cover"
            quality={60}
            className="rounded-lg"
          />
        </div>
        <div className="bg-neutral-800  row-span-1 rounded-lg flex flex-col justify-center p-4 gap-2">
          <h4 className="md:text-sm font-bold text-neutral-200">
            Tecrübeli Terapistler
          </h4>
          <p className="md:text-xs lg:text-sm text-neutral-300">
            Terapistlerimiz seçkin üniversitelerden mezun aynı zamanda bir çok
            sertifikasyon programından başarı ile geçmiş başarılı kişilerdir.
            Merkezimiz en modern ve en yararlı ekipmanlarla donatılmıştır.
          </p>
        </div>
        <div className="bg-white row-span-2 rounded-lg relative card md:auto">
          <Image
            src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e"
            alt=""
            fill
            objectFit="cover"
            quality={60}
            className="rounded-lg"
          />
        </div>
        <div className="bg-white row-span-2 rounded-lg relative card md:auto">
          <Image
            src="https://images.unsplash.com/photo-1541976844346-f18aeac57b06"
            alt=""
            fill
            objectFit="cover"
            quality={60}
            className="rounded-lg"
          />
        </div>
        <div className="bg-neutral-800  row-span-1 rounded-lg flex flex-col justify-center p-4 gap-2">
          <h4 className="md:text-sm font-bold text-neutral-200">
            Egzsersiz Servislerimiz
          </h4>
          <p className="md:text-xs lg:text-sm text-neutral-300">
            Lavinis Egzersiz ve Danışmanlık Merkezinde size tüm servislerimizde
            olağandışı bir kalite sunuyoruz. Bütün terapi hizmetlerimiz
            tecrübeli ve eğitimli uzmanlar tarafından gerçekleştirilmektedir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
