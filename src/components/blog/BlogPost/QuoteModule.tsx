import { FC } from "react";

interface QuoteModuleProps {
  content: string;
  color: string;
}

const QuoteModule: FC<QuoteModuleProps> = ({ content, color }) => {
  return (
    <div className="w-full p-8">
      <p
        className={`text-md pl-2 text-[${color}] border-l-4 border-black italic`}
      >
        {content}
      </p>
    </div>
  );
};

export default QuoteModule;
