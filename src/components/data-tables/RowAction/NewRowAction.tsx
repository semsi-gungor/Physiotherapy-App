"use client";

import { FC, useState } from "react";
import classes from "./RowAction.module.css";
import { LuMoreHorizontal } from "react-icons/lu";
import Button from "@/components/ui/button/Button";
import { motion, AnimatePresence } from "framer-motion";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Popover from "@radix-ui/react-popover";

interface RowActionProps {
  children: React.ReactNode;
}

const NewRowAction: FC<RowActionProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger asChild>
        <span>
          <Button size="full" variant="ghost">
            <LuMoreHorizontal />
          </Button>
        </span>
      </DropdownMenu.Trigger>

      <AnimatePresence>
        {isOpen && (
          <DropdownMenu.Portal forceMount>
            <DropdownMenu.Content
              asChild
              sideOffset={10}
              align="start"
              side="left"
            >
              <motion.ul
                className={classes.list}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <DropdownMenu.Item asChild>
                  <li className={classes.listItem} onClick={() => {}}>
                    Sil
                  </li>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <li className={classes.listItem}>Düzenle</li>
                    </Popover.Trigger>
                    <Popover.Portal>
                      <Popover.Content side="left" sideOffset={20}>
                        <div className={classes.rowEdit}>{children}</div>
                      </Popover.Content>
                    </Popover.Portal>
                  </Popover.Root>
                </DropdownMenu.Item>
              </motion.ul>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        )}
      </AnimatePresence>
    </DropdownMenu.Root>
  );
};

export default NewRowAction;
