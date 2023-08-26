import { FC } from "react";
import Personnel from "./Personnel";

const personnels = [
  { id: "1", name: "Lauren Cohen", title: "Fizyoterapist" },
  { id: "2", name: "Lauren Cohen", title: "Fizyoterapist" },
  { id: "3", name: "Lauren Cohen", title: "Fizyoterapist" },
];

const Personnels: FC = ({}) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-10 gap-20 bg-[var(--color-1)] ">
      <h2 className="text-5xl font-bold text-[var(--color-6)]">Ekibimiz</h2>
      <div className="flex flex-col gap-8 p-8 max-w-6xl items-center justify-center sm:flex-row sm:flex-wrap lg:gap-16">
        {personnels.map((personel, index) => {
          return (
            <Personnel
              key={personel.id}
              id={personel.id}
              index={index}
              name={personel.name}
              title={personel.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Personnels;
