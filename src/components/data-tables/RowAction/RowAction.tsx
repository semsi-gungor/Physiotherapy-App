"use client";

import { FC, useState, useContext } from "react";
import { adminContext } from "@/context/adminContext";
import classes from "./RowAction.module.css";
import { LuMoreHorizontal } from "react-icons/lu";
import Button from "@/components/ui/button/Button";
import { motion, AnimatePresence } from "framer-motion";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { User } from "@/app/(admin)/users/columns";
import { Appointment } from "@/app/(admin)/dashboard/randevular/columns";
import * as Popover from "@radix-ui/react-popover";
import Input from "@/components/ui/input/Input";
import { useForm, FieldValues } from "react-hook-form";

interface RowActionProps {
  rowData: User | Appointment;
}

const RowAction: FC<RowActionProps> = ({ rowData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  function onSubmit(data: FieldValues) {
    console.log("submitted", data);
  }

  return (
    <>
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
                          <div className={classes.rowEdit}>
                            <form
                              className={classes.rowEditForm}
                              onSubmit={handleSubmit(onSubmit)}
                            >
                              <Input
                                initialValue={rowData.email}
                                name="email"
                                register={register}
                                type="email"
                                label="Email"
                                errorMessage={errors.email?.message?.toString()}
                                pattern={{
                                  value:
                                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                  message: "Hatalı e-mail girişi.",
                                }}
                              />
                              <Input
                                initialValue={rowData.fullName}
                                name="name"
                                register={register}
                                type="text"
                                label="İsim"
                                errorMessage={errors.name?.message?.toString()}
                              />
                              <Input
                                initialValue={rowData.tel}
                                name="telno"
                                register={register}
                                type="text"
                                label="Telefon numarası"
                                errorMessage={errors.telno?.message?.toString()}
                              />
                              <Button size="md" variant="primary">
                                Gönder
                              </Button>
                            </form>
                          </div>
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
    </>
  );
};

export default RowAction;
