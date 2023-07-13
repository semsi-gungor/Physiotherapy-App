import { FC } from "react";
import classes from "./BlogPage.module.css";
import BlogHeader from "../BlogHeader/BlogHeader";

const BlogPage: FC = ({}) => {
  return (
    <div className={classes.container}>
      <BlogHeader />
    </div>
  );
};

export default BlogPage;
