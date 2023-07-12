import { FC } from "react";
import Modal from "@/components/create-post/Modal/Modal";
import HeaderInput from "@/components/create-post/HeaderInput/HeaderInput";
import TextInput from "@/components/create-post/TextInput/TextInput";
import ListInput from "@/components/create-post/ListInput/OrderedListInput";
import QuoteInput from "@/components/create-post/QuoteInput/QuoteInput";

const Page: FC = () => {
  return (
    <div>
      <Modal>
        <QuoteInput />
      </Modal>
    </div>
  );
};

export default Page;
