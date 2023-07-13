import { FC } from "react";
import classes from "./BlogPage.module.css";
import BlogHeader from "../BlogHeader/BlogHeader";
import BlogCards from "../BlogCards/BlogCards";

const BlogPage: FC = ({}) => {
  return (
    <div className={classes.container}>
      <BlogHeader />
      <BlogCards />
    </div>
  );
};

export default BlogPage;
