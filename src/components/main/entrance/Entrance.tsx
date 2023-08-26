import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { FC } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

const Entrance: FC = ({}) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative ">
      <div className="flex flex-col gap-12 justify-center items-center md:flex-row">
        <div className="max-w-lg">
          <h1
            className={`leading-10 font-extrabold tracking-tight text-3xl text-gray-800 ${poppins.className} md:text-4xl`}
          >
            Kendine bir iyilik yap,
            <br />
            bedenini harekete geçir,
            <br />
            zihnini temizle.
          </h1>
        </div>
        <div className="max-w-sm  space-y-6 text-xs leading-5 tracking-tight text-gray-600 md:text-sm">
          <p>
            LAVİNİS Egzersiz ve Danışmanlık Merkezi olarak danışanlarımızın
            yaşam kalitesini artırmak ve onlara ağrısız bir yaşam sunmak için
            profesyonel bir çatı altında 2020 yılında hizmet hayatına başladık.
          </p>
        </div>
      </div>
      <div className=" absolute bottom-36 space-x-8">
        <Link href="/randevu-alma">
          <Button size="lg">Randevu Al</Button>
        </Link>
        <Link href="/iletisim">
          <Button variant="outline" size="lg">
            Bize Ulaş
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Entrance;
