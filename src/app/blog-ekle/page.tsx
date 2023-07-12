import { FC } from "react";
import Modal from "@/components/create-post/Modal/Modal";
import HeaderInput from "@/components/create-post/HeaderInput/HeaderInput";
import TextInput from "@/components/create-post/TextInput/TextInput";
import ListInput from "@/components/create-post/ListInput/OrderedListInput";

const Page: FC = () => {
  return (
    <div>
      <Modal>
        <ListInput />
      </Modal>
    </div>
  );
};

export default Page;
