import { FC } from "react";
import Modal from "@/components/create-post/Modal/Modal";
import HeaderInput from "@/components/create-post/HeaderInput/HeaderInput";
import TextInput from "@/components/create-post/TextInput/TextInput";

const Page: FC = () => {
  return (
    <div>
      <Modal>
        <TextInput />
      </Modal>
    </div>
  );
};

export default Page;
