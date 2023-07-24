"use client";

import { FC, ReactNode, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import classes from "./RowAction.module.css";
import { LuMoreHorizontal } from "react-icons/lu";
import Button from "@/components/ui/button/Button";
import { motion, AnimatePresence } from "framer-motion";
import * as Popover from "@radix-ui/react-popover";
import Modal from "@/components/ui/modal/Modal";

interface RowActionProps {
  title: string;
  children: ReactNode;
  onSubmit?: () => Promise<void>;
}

const RowAction: FC<RowActionProps> = ({ title, children, onSubmit }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Popover.Root open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <Popover.Trigger asChild>
        <span>
          <Button size="full" variant="ghost">
            <LuMoreHorizontal />
          </Button>
        </span>
      </Popover.Trigger>

      <AnimatePresence>
        {isPopoverOpen && (
          <Popover.Portal forceMount>
            <Popover.Content asChild sideOffset={10} align="start" side="left">
              <motion.ul
                className={classes.list}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <li className={classes.listItem} onClick={() => {}}>
                  Sil
                </li>
                <Modal
                  isModalOpen={isDialogOpen}
                  setIsModalOpen={setIsDialogOpen}
                >
                  <Modal.Button asChild>
                    <li className={classes.listItem} onClick={() => {}}>
                      Düzenle
                    </li>
                  </Modal.Button>
                  <AnimatePresence>
                    {isDialogOpen && (
                      <Modal.Content title={title}>
                        <div className={classes.body}>{children}</div>
                      </Modal.Content>
                    )}
                  </AnimatePresence>
                </Modal>
              </motion.ul>
            </Popover.Content>
          </Popover.Portal>
        )}
      </AnimatePresence>
    </Popover.Root>
  );
};

export default RowAction;
