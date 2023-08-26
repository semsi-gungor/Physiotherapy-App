"use client";

import { FC, ReactNode, useState } from "react";
import classes from "./RowAction.module.css";
import { LuMoreHorizontal } from "react-icons/lu";
import Button from "@/components/ui/button/Button";
import { motion, AnimatePresence } from "framer-motion";
import * as Popover from "@radix-ui/react-popover";
import Modal from "@/components/ui/modal/Modal";

interface RowActionProps {
  children: ReactNode[];
  onSubmit?: () => Promise<void>;
}

const RowAction: FC<RowActionProps> = ({ children, onSubmit }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  return (
    <Popover.Root open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <Popover.Trigger asChild>
        <span>
          <Button size="square" variant="ghost">
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
                <Modal
                  isModalOpen={isDeleteDialogOpen}
                  setIsModalOpen={setIsDeleteDialogOpen}
                >
                  <Modal.Button asChild>
                    <li className={classes.listItem}>Sil</li>
                  </Modal.Button>
                  <AnimatePresence>
                    {isDeleteDialogOpen && (
                      <Modal.Content>
                        <div className={classes.body}>{children[0]}</div>
                      </Modal.Content>
                    )}
                  </AnimatePresence>
                </Modal>
                <Modal
                  isModalOpen={isEditDialogOpen}
                  setIsModalOpen={setIsEditDialogOpen}
                >
                  <Modal.Button asChild>
                    <li className={classes.listItem}>Düzenle</li>
                  </Modal.Button>
                  <AnimatePresence>
                    {isEditDialogOpen && (
                      <Modal.Content>
                        <div className={classes.body}>{children[1]}</div>
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
