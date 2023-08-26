"use client";

import { FC } from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { motion } from "framer-motion";

interface FamiliarItemProps {
  item: string;
  id: number;
  active: boolean;
}

const FamiliarItem: FC<FamiliarItemProps> = ({ item, id, active }) => {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ delay: id * 0.2, duration: 0.5 }}
      className="group flex gap-1 font-light text-[var(--color-5)] transition"
    >
      <span className="text-[var(--soft-error)] mt-[1px] group-hover:text-[var(--error)]">
        <BsFillCaretRightFill />
      </span>

      <p className="leading-5 break-words text-sm group-hover:text-[var(--color-6)] md:text-base">
        {item}
      </p>
    </motion.li>
  );
};

export default FamiliarItem;
