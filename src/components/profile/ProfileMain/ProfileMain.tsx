"use client";

import { FC, useState } from "react";
import classes from "./ProfileMain.module.css";
import Button from "@/components/ui/button/Button";
import Modal from "@/components/ui/modal/Modal";
import { AnimatePresence } from "framer-motion";

interface ProfileMainProps {}

const ProfileMain: FC<ProfileMainProps> = ({}) => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  return (
    <div className={classes.container}>
      <Button size="thquarters">HIZLI RANDEVU AL</Button>
      <Modal isModalOpen={isHistoryOpen} setIsModalOpen={setIsHistoryOpen}>
        <Modal.Button asChild>
          <Button size="thquarters">GEÇMİŞ RANDEVULAR</Button>
        </Modal.Button>
        <AnimatePresence>
          {isHistoryOpen && (
            <Modal.Content title="Randevu Geçmişi">geçmiş</Modal.Content>
          )}
        </AnimatePresence>
      </Modal>
    </div>
  );
};

export default ProfileMain;
