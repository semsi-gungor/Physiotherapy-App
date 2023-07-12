"use client";

import { FC, useState, useContext } from "react";
import { uiContext } from "@/context/uiControl";
import classes from "./InputMenu.module.css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { AiOutlinePlus } from "react-icons/ai";
import {
  BsTextParagraph,
  BsListUl,
  BsBlockquoteLeft,
  BsFileEarmarkImage,
} from "react-icons/bs";
import { MdTitle } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const InputMenu: FC = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const uiCtx = useContext(uiContext);

  return (
    <div className={classes.menu}>
      <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenu.Trigger asChild>
          <motion.div
            className={classes.menuButton}
            animate={{ rotate: isOpen ? 135 : 0 }}
          >
            <AiOutlinePlus />
          </motion.div>
        </DropdownMenu.Trigger>

        <AnimatePresence>
          {isOpen && (
            <DropdownMenu.Portal forceMount>
              <DropdownMenu.Content asChild sideOffset={5}>
                <motion.ul
                  className={classes.list}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <DropdownMenu.Item asChild>
                    <li
                      className={classes.listItem}
                      onClick={() => {
                        uiCtx.displayInputModal();
                      }}
                    >
                      <MdTitle />
                    </li>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <li
                      className={classes.listItem}
                      onClick={uiCtx.displayInputModal}
                    >
                      <BsTextParagraph />
                    </li>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <li
                      className={classes.listItem}
                      onClick={uiCtx.displayInputModal}
                    >
                      <BsListUl />
                    </li>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <li
                      className={classes.listItem}
                      onClick={uiCtx.displayInputModal}
                    >
                      <BsBlockquoteLeft />
                    </li>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <li
                      className={classes.listItem}
                      onClick={uiCtx.displayInputModal}
                    >
                      <BsFileEarmarkImage />
                    </li>
                  </DropdownMenu.Item>
                </motion.ul>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          )}
        </AnimatePresence>
      </DropdownMenu.Root>
    </div>
  );
};

export default InputMenu;
