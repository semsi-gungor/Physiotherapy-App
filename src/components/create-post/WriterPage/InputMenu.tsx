"use client";

import { FC, useState, useContext } from "react";
import { uiContext } from "@/context/uiControl";
import { blogContext } from "@/context/blogContext";
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

type InputType = "text" | "list" | "quote" | "header" | "image";

type InputMenuProps = {
  onChange: (payload: InputType) => void;
};

const InputMenu: FC<InputMenuProps> = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const blogCtx = useContext(blogContext);
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
                        onChange("header");
                        blogCtx.setPostingType("add");
                        uiCtx.displayInputModal();
                      }}
                    >
                      <MdTitle />
                    </li>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <li
                      className={classes.listItem}
                      onClick={() => {
                        onChange("text");
                        blogCtx.setPostingType("add");
                        uiCtx.displayInputModal();
                      }}
                    >
                      <BsTextParagraph />
                    </li>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <li
                      className={classes.listItem}
                      onClick={() => {
                        onChange("list");
                        blogCtx.setPostingType("add");
                        uiCtx.displayInputModal();
                      }}
                    >
                      <BsListUl />
                    </li>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <li
                      className={classes.listItem}
                      onClick={() => {
                        onChange("quote");
                        blogCtx.setPostingType("add");
                        uiCtx.displayInputModal();
                      }}
                    >
                      <BsBlockquoteLeft />
                    </li>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <li
                      className={classes.listItem}
                      onClick={() => {
                        onChange("image");
                        blogCtx.setPostingType("add");
                        uiCtx.displayInputModal();
                      }}
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
