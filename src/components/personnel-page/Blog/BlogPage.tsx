"use client";

import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WriterPage from "@/components/create-post/WriterPage/WriterPage";
import BlogsTable from "./BlogsTable/BlogsTable";

const BlogPage: FC = ({}) => {
  const [blogPageState, setBlogPageState] = useState(false);

  return (
    <div className="overflow-hidden relative">
      <AnimatePresence initial={false}>
        {!blogPageState && <WriterPage setBlogPageState={setBlogPageState} />}
      </AnimatePresence>
      <AnimatePresence>
        {blogPageState && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ bounce: 0 }}
          >
            <BlogsTable setBlogPageState={setBlogPageState} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogPage;
