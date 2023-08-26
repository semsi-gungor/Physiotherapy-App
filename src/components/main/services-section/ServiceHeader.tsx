import { FC } from "react";
import { LuHelpingHand } from "react-icons/lu";
import Title from "../title/Title";

const ServiceHeader: FC = ({}) => {
  return (
    <div className=" w-full py-16 flex flex-col items-center justify-center">
      <Title title="hizmetlerimiz" icon={LuHelpingHand} />
      <div className="flex gap-16 px-8">
        <p className="max-w-sm space-y-6 text-sm leading-2 text-gray-600 tracking-wide font-semibold md:text-base lg:text-lg lg:leading-7">
          LAVİNİS Egzersiz ve Danışmanlık Merkezi olarak danışanlarımızın yaşam
          kalitesini artırmak ve onlara ağrısız bir yaşam sunmak için
          profesyonel bir çatı altında 2020 yılında hizmet hayatına başladık.
        </p>
        <p className="max-w-sm  space-y-6 text-sm leading-2 text-gray-600 tracking-wide font-semibold md:text-base lg:text-lg lg:leading-7">
          LAVİNİS bünyesinde; Reformer Pilates, Hamile Pilatesi, Yogaterapi,
          Manuel Terapi, Pelvik Taban Rehabilitasyonu, 3 Boyutlu Skolyoz
          Egzersizleri, Lenfödem Rehabilitasyonu, Kanser Sonrası Egzersiz
          Danışmanlığı, Dans ve Zumba hizmetlerini vermekteyiz.
        </p>
      </div>
    </div>
  );
};

export default ServiceHeader;
