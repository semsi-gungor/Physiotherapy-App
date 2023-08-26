"use client";

import { FC, useState } from "react";
import classes from "./ProfileSettings.module.css";
import Modal from "@/components/ui/modal/Modal";
import { AnimatePresence } from "framer-motion";
import { FiSettings } from "react-icons/fi";
import Input from "@/components/ui/input/Input";
import { useForm, FieldValues } from "react-hook-form";
import Button from "@/components/ui/button/Button";

const user = {
  userId: "1",
  fullName: "Şemsi Güngör",
  dateOfBirth: "04.09.1999",
  email: "semsi_gungor@hotmail.com",
  role: "user",
  tel: "05382313298",
};

interface ProfileSettingsProps {}

const ProfileSettings: FC<ProfileSettingsProps> = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={classes.container}>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <Modal.Button asChild>
          <button className={classes.settingButton}>
            <FiSettings />
          </button>
        </Modal.Button>
        <AnimatePresence>
          {isModalOpen && (
            <Modal.Content>
              <Form closeModal={setIsModalOpen} />
            </Modal.Content>
          )}
        </AnimatePresence>
      </Modal>
    </div>
  );
};

function Form({ closeModal }: { closeModal: (state: boolean) => void }) {
  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  function onSubmit(data: FieldValues) {}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        initialValue={user.fullName}
        name="fullname"
        register={register}
        type="text"
        label="İsim"
        errorMessage={errors.fullname?.message?.toString()}
      />
      <Input
        initialValue={user.email}
        name="email"
        register={register}
        type="email"
        label="Email"
        errorMessage={errors.email?.message?.toString()}
      />

      <Input
        initialValue={user.dateOfBirth}
        name="dob"
        register={register}
        type="text"
        label="Doğum Tarihi"
        errorMessage={errors.dob?.message?.toString()}
      />
      <Input
        initialValue={user.tel}
        name="phoneNum"
        register={register}
        type="text"
        label="Telefon Numarası"
        errorMessage={errors.phoneNum?.message?.toString()}
      />
      <Button
        onClick={() => {
          closeModal(false);
        }}
      >
        Kaydet
      </Button>
    </form>
  );
}

export default ProfileSettings;
