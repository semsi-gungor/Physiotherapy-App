import { ReactNode } from "react";
import classes from "./Modal.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";

interface ModalProps {
  children: ReactNode;
  isModalOpen: boolean;
  setIsModalOpen: (state: boolean) => void;
}

export default function Modal({
  children,
  isModalOpen,
  setIsModalOpen,
}: ModalProps) {
  return (
    <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
      {children}
    </Dialog.Root>
  );
}

function ModalContent({ children }: { children: ReactNode }) {
  return (
    <Dialog.Portal forceMount>
      <Dialog.Overlay asChild>
        <motion.div
          className={classes.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
        ></motion.div>
      </Dialog.Overlay>
      <Dialog.Content asChild>
        <motion.div
          className={classes.modal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={classes.header}>
            <Dialog.Title asChild>
              <h2>{""}</h2>
            </Dialog.Title>
            <Dialog.Close asChild>
              <span>
                <GrClose />
              </span>
            </Dialog.Close>
          </div>
          {children}
        </motion.div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

Modal.Button = Dialog.Trigger;
Modal.Content = ModalContent;
