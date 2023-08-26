import { FC } from "react";
import classes from "./ContactMain.module.css";
import { AiFillPhone, AiFillMail, AiFillEnvironment } from "react-icons/ai";

const ContactMain: FC = ({}) => {
  return (
    <div className="w-100 min-h-screen flex flex-col">
      <div className=" grid grid-cols-1 gap-4 p-4 mt-12 lg:grid-cols-3 lg:mt-16 lg:px-24 lg:pt-16 pb-8">
        <div className="bg-white rounded-lg w-full h-44 flex flex-col">
          <div className="flex items-center p-6 gap-4">
            <span className="text-3xl">
              <AiFillPhone />
            </span>
            <p className="text-2xl font-semibold">Telefon</p>
          </div>
          <p className="mx-8 py-4 text-xl border-t border-gray-300">
            +90-536-425-32-59
          </p>
        </div>
        <div className="bg-white rounded-lg w-full h-44 flex flex-col">
          <div className="flex items-center p-6 gap-4">
            <span className="text-3xl">
              <AiFillMail />
            </span>
            <p className="text-2xl font-semibold">Email</p>
          </div>
          <p className="mx-8 py-4 text-xl border-t border-gray-300">
            physiotherapy@mail.com
          </p>
        </div>
        <div className="bg-white rounded-lg w-full h-44 flex flex-col">
          <div className="flex items-center p-6 gap-4">
            <span className="text-3xl">
              <AiFillEnvironment />
            </span>
            <p className="text-2xl font-semibold">Adres</p>
          </div>
          <p className="mx-8 py-4 text-lg border-t border-gray-300 md:text-base">
            Dörtyol, Çiçek Cad. No:50/B 24000 <br /> İlçe/Şehir
          </p>
        </div>
      </div>
      <div className="h-64 px-4 lg:h-[21rem] lg:px-24 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24081.196652458457!2d40.5130548!3d41.0219833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1688822248025!5m2!1str!2str"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMain;
